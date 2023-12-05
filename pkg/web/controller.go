package web

import (
	"context"
	"fmt"
	"geddit/pkg/post"
	"geddit/pkg/templates"
	"geddit/pkg/user"
	"log/slog"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"github.com/gofrs/uuid/v5"
)

const STATIC_RESOURCES_PATH = "./static"

type Controller struct {
	Templates   templates.Templates
	UserService user.Service
	PostService post.Service
}

func (c *Controller) InitRouter() *chi.Mux {
	router := chi.NewRouter()

	// static resources
	router.Handle(
		"/static/*",
		http.StripPrefix(
			"/static/",
			http.FileServer(http.Dir(STATIC_RESOURCES_PATH)),
		),
	)

	router.Get("/login", c.loginPage)
	router.Post("/login", c.login)
	router.Get("/signup", c.signupPage)
	router.Post("/signup", c.signup)
	router.Get("/profile", c.profilePage)
	router.Get("/", c.homePage)
	router.Get("/post", c.postPage)
	router.Get("/post/new", c.createPostPage)
	router.Post("/post/new", c.createPost)

	return router
}

func (c *Controller) loginPage(w http.ResponseWriter, r *http.Request) {
	if err := c.Templates["login"].Execute(w, nil); err != nil {
		slog.Error("failed login page", err)
		return
	}
}

func (c *Controller) login(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		slog.Error("failed login request", err)
		return
	}
	dto := user.LoginDto{
		Email:    r.Form.Get("email"),
		Password: r.Form.Get("password"),
	}
	user, err := c.UserService.Login(dto)
	if err != nil {
		slog.Error("failed login request", err)
		return
	}
	http.Redirect(
		w,
		r,
		fmt.Sprintf("/profile?id=%s", user.Id),
		http.StatusSeeOther,
	)
}

func (c *Controller) signupPage(w http.ResponseWriter, r *http.Request) {
	if err := c.Templates["signup"].Execute(w, nil); err != nil {
		slog.Error("failed signup page", err)
		return
	}
}

func (c *Controller) signup(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		slog.Error("failed signup request", err)
		return
	}
	dto := user.CreateDto{
		Username: r.Form.Get("username"),
		Email:    r.Form.Get("email"),
		Password: r.Form.Get("password"),
	}
	id, err := c.UserService.Create(dto)
	if err != nil {
		slog.Error("failed signup request", err)
		return
	}
	http.Redirect(w, r, fmt.Sprintf("/profile?id=%s", id), http.StatusSeeOther)
}

func (c *Controller) profilePage(w http.ResponseWriter, r *http.Request) {
	type profilePageData struct {
		Profile user.User
	}
	values := r.URL.Query()
	if !values.Has("id") {
		slog.Error("failed profile page no id")
		return
	}
	id, err := uuid.FromString(values.Get("id"))
	if err != nil {
		slog.Error("failed profile page", err)
		return
	}
	user, err := c.UserService.GetById(id)
	if err != nil {
		slog.Error("failed profile page", err)
		return
	}
	data := profilePageData{
		Profile: user,
	}
	if err := c.Templates["profile"].Execute(w, data); err != nil {
		slog.Error("failed profile page", err)
		return
	}
}

func (c *Controller) homePage(
	w http.ResponseWriter,
	r *http.Request,
) {
	values := r.URL.Query()
	if !values.Has("page") {
		slog.Error("failed paginated posts page no page number")
		return
	}
	page, err := strconv.ParseInt(values.Get("page"), 10, 0)
	if err != nil {
		slog.Error("failed paginated posts page", err)
		return
	}
	ctx := context.Background()
	posts, err := c.PostService.GetPaginated(ctx, int(page), 20)
	if err != nil {
		slog.Error("failed paginated posts page", err)
		return
	}
	type homePageData struct {
		Posts []post.Post
	}
	data := homePageData{
		Posts: posts,
	}
	if err := c.Templates["home"].Execute(w, data); err != nil {
		slog.Error("failed paginated posts page", err)
		return
	}
}

func (c *Controller) postPage(w http.ResponseWriter, r *http.Request) {
	values := r.URL.Query()
	if !values.Has("id") {
		slog.Error("failed post page no id")
		return
	}
	id, err := uuid.FromString(values.Get("id"))
	if err != nil {
		slog.Error("failed post page", err)
		return
	}
	ctx := context.Background()
	_post, err := c.PostService.GetById(ctx, id)
	if err != nil {
		slog.Error("failed post page", err)
		return
	}
	type postPageData struct {
		Post post.Post
	}
	data := postPageData{
		Post: _post,
	}
	if err := c.Templates["post"].Execute(w, data); err != nil {
		slog.Error("failed post page", err)
		return
	}
}

func (c *Controller) createPostPage(w http.ResponseWriter, r *http.Request) {
	if err := c.Templates["createpost"].Execute(w, nil); err != nil {
		slog.Error("failed paginated posts page", err)
		return
	}
}

func (c *Controller) createPost(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	if err := r.ParseForm(); err != nil {
		slog.Error("failed create post request", err)
		return
	}
	dto := post.CreateDto{
		Author: uuid.FromStringOrNil("a82fea7c602b4dacbfc64fe20735f31b"),
		Title:  r.Form.Get("title"),
		Body:   r.Form.Get("body"),
	}
	id, err := c.PostService.Create(ctx, dto)
	if err != nil {
		slog.Error("failed create post request", err)
		return
	}
	http.Redirect(w, r, fmt.Sprintf("/post?id=%s", id), http.StatusSeeOther)
}
