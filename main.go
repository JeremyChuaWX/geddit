package main

import (
	"geddit/pkg/post"
	"geddit/pkg/postgres"
	"geddit/pkg/templates"
	"geddit/pkg/user"
	"geddit/pkg/web"
	"log"
	"net/http"
)

func main() {
	dbUrl := "postgresql://admin:password123@127.0.0.1:5432/geddit?sslmode=disable"
	postgres := postgres.New(dbUrl)
	userService := user.NewService(postgres)
	postService := post.NewService(postgres)
	templates := templates.InitTemplates()
	webController := &web.Controller{
		Templates:   templates,
		UserService: userService,
		PostService: postService,
	}
	router := webController.InitRouter()
	log.Println("starting server on port 3000...")
	log.Fatalf(
		"error starting server: %v",
		http.ListenAndServe("127.0.0.1:3000", router),
	)
}
