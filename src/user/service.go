package user

import (
	"context"
	"geddit/postgres"
	"log/slog"

	"github.com/gofrs/uuid/v5"
)

type Service interface {
	Create(dto CreateDto) (uuid.UUID, error)
	GetByUsername(username string) (User, error)
	GetByEmail(email string) (User, error)
	GetById(id uuid.UUID) (User, error)
}

type service struct {
	postgres *postgres.Postgres
}

func NewService(postgres *postgres.Postgres) Service {
	return &service{postgres}
}

func (s *service) Create(dto CreateDto) (uuid.UUID, error) {
	var id uuid.UUID
	query := `
	INSERT INTO users (username, email, password_hash)
	VALUES ($1, $2, $3)
	RETURNING id;
	`
	err := s.postgres.Pool.QueryRow(context.Background(), query, dto.Username, dto.Email, dto.PasswordHash).
		Scan(&id)
	if err != nil {
		slog.Error("failed to create new user", err)
		return uuid.Nil, err
	}
	return id, nil
}

func (s *service) GetByUsername(username string) (User, error) {
	var user User
	query := "SELECT * FORM users WHERE users.username = $1;"
	err := s.postgres.Pool.QueryRow(context.Background(), query, username).Scan(&user)
	if err != nil {
		slog.Error("failed to query users by username", err)
		return User{}, err
	}
	return user, nil
}

func (s *service) GetByEmail(email string) (User, error) {
	var user User
	query := "SELECT * FORM users WHERE users.email = $1;"
	err := s.postgres.Pool.QueryRow(context.Background(), query, email).Scan(&user)
	if err != nil {
		slog.Error("failed to query users by email", err)
		return User{}, err
	}
	return user, nil
}

func (s *service) GetById(id uuid.UUID) (User, error) {
	var user User
	query := "SELECT * FORM users WHERE users.id = $1;"
	err := s.postgres.Pool.QueryRow(context.Background(), query, id).Scan(&user)
	if err != nil {
		slog.Error("failed to query users by id", err)
		return User{}, err
	}
	return user, nil
}
