package web

import (
	"geddit/pkg/html"
	"geddit/pkg/user"
	"log/slog"
	"net/http"

	"github.com/go-chi/chi/v5"
)

const STATIC_RESOURCES_PATH = "./static"

type Controller struct {
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
	http.ServeFile(w, r, html.GetStatic("login"))
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
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(user.Id.String()))
}

func (c *Controller) userSignupPage(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, html.GetStatic("signup"))
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
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(id.String()))
}

func (c *Controller) userProfilePage(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, html.GetStatic("profile"))
}