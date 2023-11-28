package main

import (
	"geddit/postgres"
	"geddit/user"
	"geddit/web"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func main() {
	dbUrl := "postgresql://admin:password123@127.0.0.1:5432/geddit?sslmode=disable"
	postgres := postgres.New(dbUrl)
	userService := user.NewService(postgres)
	webController := &web.Controller{
		UserService: userService,
		Router:      chi.NewRouter(),
	}
	router := webController.InitRouter()
	log.Println("starting server on port 3000...")
	log.Fatalf(
		"error starting server: %v",
		http.ListenAndServe("127.0.0.1:3000", router),
	)
}
