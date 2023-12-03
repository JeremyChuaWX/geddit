package web

import (
	"fmt"
	"geddit/pkg/templates"
	"geddit/pkg/user"
	"log/slog"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/gofrs/uuid/v5"
)

const STATIC_RESOURCES_PATH = "./static"

type Controller struct {
	Templates   templates.Templates
	UserService user.Service
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

	// user login
	router.Get("/login", c.userLoginPage)
	router.Post("/login", c.userLogin)

	// user signup
	router.Get("/signup", c.userSignupPage)
	router.Post("/signup", c.userSignup)

	// user profile
	router.Get("/profile", c.userProfilePage)

	return router
}

func (c *Controller) userLoginPage(w http.ResponseWriter, r *http.Request) {
	if err := c.Templates["login"].Execute(w, nil); err != nil {
		slog.Error("failed login page", err)
		return
	}
}

func (c *Controller) userLogin(w http.ResponseWriter, r *http.Request) {
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

func (c *Controller) userSignupPage(w http.ResponseWriter, r *http.Request) {
	if err := c.Templates["signup"].Execute(w, nil); err != nil {
		slog.Error("failed signup page", err)
		return
	}
}

func (c *Controller) userSignup(w http.ResponseWriter, r *http.Request) {
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
	http.Redirect(
		w,
		r,
		fmt.Sprintf("/profile?id=%s", id.String()),
		http.StatusSeeOther,
	)
}

func (c *Controller) userProfilePage(w http.ResponseWriter, r *http.Request) {
	values := r.URL.Query()
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
	if err := c.Templates["profile"].Execute(w, user); err != nil {
		slog.Error("failed profile page", err)
		return
	}
}
