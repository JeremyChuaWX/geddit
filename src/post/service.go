package post

import (
	"context"
	"geddit/postgres"

	"github.com/gofrs/uuid/v5"
	"github.com/jackc/pgx/v5"
)

type Service interface {
	create(dto createDto) (id uuid.UUID, err error)
	getById(id uuid.UUID) (post Post, err error)
}

type service struct {
	postgres *postgres.Postgres
}

func NewService(postgres *postgres.Postgres) Service {
	return &service{postgres}
}

func (s *service) create(dto createDto) (id uuid.UUID, err error) {
	query := `
	INSERT INTO posts (author, title, body)
	VALUES ($1, $2, $3)
	RETURNING id;
	`
	err = s.postgres.Pool.QueryRow(
		context.Background(),
		query,
		dto.author,
		dto.title,
		dto.body,
	).Scan(
		&id,
	)
	if err != nil {
		return uuid.Nil, err
	}
	return id, nil
}

func (s *service) getById(id uuid.UUID) (post Post, err error) {
	query := `
	SELECT id, author, title, body, created_at FROM posts
	WHERE id = $1;
	`
	rows, err := s.postgres.Pool.Query(context.Background(), query, id)
	if err != nil {
		return Post{}, err
	}
	post, err = pgx.CollectOneRow(rows, pgx.RowToStructByName[Post])
	if err != nil {
		return Post{}, err
	}
	return post, nil
}
