package main

import (
	"geddit/postgres"
	"geddit/user"
	"geddit/web"
	"log"
	"net/http"
)

func main() {
	dbUrl := "postgresql://admin:password123@127.0.0.1:5432/geddit?sslmode=disable"
	postgres := postgres.New(dbUrl)
	userService := user.NewService(postgres)
	webController := &web.Controller{
		UserService: userService,
	}
	router := webController.InitRouter()
	log.Println("starting server on port 3000...")
	log.Fatalf(
		"error starting server: %v",
		http.ListenAndServe("127.0.0.1:3000", router),
	)
}
