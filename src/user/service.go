package user

import (
	"context"
	"geddit/password"
	"geddit/postgres"

	"github.com/gofrs/uuid/v5"
	"github.com/jackc/pgx/v5"
)

type Service interface {
	Create(dto CreateDto) (id uuid.UUID, err error)
	GetByUsername(username string) (user User, err error)
	GetByEmail(email string) (user User, err error)
	GetById(id uuid.UUID) (user User, err error)
	Login(dto LoginDto) (user User, err error)
}

type service struct {
	postgres *postgres.Postgres
}

func NewService(postgres *postgres.Postgres) Service {
	return &service{postgres}
}

func (s *service) Create(dto CreateDto) (id uuid.UUID, err error) {
	passwordHash, err := password.Hash(dto.Password)
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
		dto.Username,
		dto.Email,
		passwordHash,
	).Scan(
		&id,
	)
	if err != nil {
		return uuid.Nil, err
	}
	return id, nil
}

func (s *service) GetByUsername(username string) (user User, err error) {
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

func (s *service) GetByEmail(email string) (user User, err error) {
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

func (s *service) GetById(id uuid.UUID) (user User, err error) {
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

func (s *service) Login(dto LoginDto) (user User, err error) {
	user, err = s.GetByEmail(dto.Email)
	if err != nil {
		return User{}, err
	}
	err = password.Verify(dto.Password, user.PasswordHash)
	if err != nil {
		return User{}, err
	}
	return user, nil
}
