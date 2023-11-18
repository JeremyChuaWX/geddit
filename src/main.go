package main

import (
	"geddit/postgres"
	"geddit/user"
	"log/slog"
	"os"
)

func main() {
	dbUrl := "postgresql://admin:password123@127.0.0.1:5432/geddit?sslmode=disable"
	postgres := postgres.New(dbUrl)
	userService := user.NewService(postgres)
	id, err := userService.Create(user.CreateDto{
		Username:     "user2",
		Email:        "user2@geddit.com",
		PasswordHash: "passwordhash",
	})
	if err != nil {
		os.Exit(1)
	}
	slog.Info("created user successfully", "id", id.String())
}
