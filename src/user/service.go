package user

import (
	"context"
	"geddit/password"
	"geddit/postgres"

	"github.com/gofrs/uuid/v5"
	"github.com/jackc/pgx/v5"
)

type Service interface {
	create(dto createDto) (id uuid.UUID, err error)
	getByUsername(username string) (user User, err error)
	getByEmail(email string) (user User, err error)
	getById(id uuid.UUID) (user User, err error)
	login(dto loginDto) (loggedIn bool, err error)
}

type service struct {
	postgres *postgres.Postgres
}

func NewService(postgres *postgres.Postgres) Service {
	return &service{postgres}
}

func (s *service) create(dto createDto) (id uuid.UUID, err error) {
	passwordHash, err := password.Hash(dto.password)
	if err != nil {
		return uuid.Nil, err
	}
	query := `
	INSERT INTO users (username, email, password_hash)
	VALUES ($1, $2, $3)
	RETURNING id;
	`
	err = s.postgres.Pool.QueryRow(
		context.Background(),
		query,
		dto.username,
		dto.email,
		passwordHash,
	).Scan(
		&id,
	)
	if err != nil {
		return uuid.Nil, err
	}
	return id, nil
}

func (s *service) getByUsername(username string) (user User, err error) {
	query := `
	SELECT id, username, email, password_hash FROM users
	WHERE username = $1;
	`
	rows, err := s.postgres.Pool.Query(context.Background(), query, username)
	if err != nil {
		return User{}, err
	}
	user, err = pgx.CollectOneRow(rows, pgx.RowToStructByName[User])
	if err != nil {
		return User{}, err
	}
	return user, nil
}

func (s *service) getByEmail(email string) (user User, err error) {
	query := `
	SELECT id, username, email, password_hash FROM users
	WHERE email = $1;
	`
	rows, err := s.postgres.Pool.Query(context.Background(), query, email)
	if err != nil {
		return User{}, err
	}
	user, err = pgx.CollectOneRow(rows, pgx.RowToStructByName[User])
	if err != nil {
		return User{}, err
	}
	return user, nil
}

func (s *service) getById(id uuid.UUID) (user User, err error) {
	query := `
	SELECT id, username, email, password_hash FROM users
	WHERE id = $1;
	`
	rows, err := s.postgres.Pool.Query(context.Background(), query, id)
	if err != nil {
		return User{}, err
	}
	user, err = pgx.CollectOneRow(rows, pgx.RowToStructByName[User])
	if err != nil {
		return User{}, err
	}
	return user, nil
}

func (s *service) login(dto loginDto) (loggedIn bool, err error) {
	user, err := s.getByEmail(dto.email)
	if err != nil {
		return false, err
	}
	match, err := password.Verify(dto.password, user.PasswordHash)
	if err != nil {
		return false, err
	}
	if !match {
		return false, nil
	}
	return true, nil
}
