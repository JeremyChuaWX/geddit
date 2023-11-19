package main

import (
	"geddit/postgres"
	"geddit/user"
)

func main() {
	dbUrl := "postgresql://admin:password123@127.0.0.1:5432/geddit?sslmode=disable"
	postgres := postgres.New(dbUrl)
	userService := user.NewService(postgres)
	userRouter := user.NewController(userService).InitRoutes()
}
