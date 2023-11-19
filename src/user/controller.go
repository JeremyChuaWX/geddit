package user

import (
	"log/slog"
	"net/http"

	"github.com/go-chi/chi/v5"
)

type Controller interface {
	InitRoutes() *chi.Mux
	create(w http.ResponseWriter, r *http.Request)
	get(w http.ResponseWriter, r *http.Request)
}

type controller struct {
	service Service
	Router  *chi.Mux
}

func NewController(service Service) Controller {
	router := chi.NewRouter()
	return &controller{service, router}
}

func (c *controller) InitRoutes() *chi.Mux {
	c.Router.Post("/", c.create)
	c.Router.Get("/", c.get)
	return c.Router
}

func (c *controller) create(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		slog.Error("failed create user request", err)
		return
	}
	dto := createDto{
		username: r.Form.Get("username"),
		email:    r.Form.Get("email"),
		password: r.Form.Get("password"),
	}
	id, err := c.service.create(dto)
	if err != nil {
		slog.Error("failed create user request", err)
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("haeslf"))
}

func (c *controller) get(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		slog.Error("unable to parse create user request", err)
	}
}
