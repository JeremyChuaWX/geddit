package web

import (
	"geddit/user"
	"log/slog"
	"net/http"
	"text/template"

	"github.com/go-chi/chi/v5"
)

var templates = make(map[string]*template.Template)

type Controller struct {
	UserService user.Service
	Router      *chi.Mux
}

func (c *Controller) InitRouter() *chi.Mux {
	// user login
	c.Router.Get("/login", c.userLoginPage)
	c.Router.Post("/login", c.userLogin)

	// user signup
	c.Router.Get("/signup", c.userSignupPage)
	c.Router.Post("/signup", c.userSignup)

	// user profile
	c.Router.Get("/profile", c.userProfilePage)

	return c.Router
}

func (c *Controller) userLoginPage(w http.ResponseWriter, r *http.Request) {
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
}
