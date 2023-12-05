package post

import (
	"context"
	"geddit/pkg/postgres"

	"github.com/gofrs/uuid/v5"
	"github.com/jackc/pgx/v5"
)

type Service interface {
	Create(ctx context.Context, dto CreateDto) (id uuid.UUID, err error)
	GetById(ctx context.Context, id uuid.UUID) (post Post, err error)
	GetPaginated(
		ctx context.Context,
		page int,
		size int,
	) (posts []Post, err error)
}

type service struct {
	postgres *postgres.Postgres
}

func NewService(postgres *postgres.Postgres) Service {
	return &service{postgres}
}

func (s *service) Create(
	ctx context.Context,
	dto CreateDto,
) (id uuid.UUID, err error) {
	query := `
	INSERT INTO posts (author, title, body)
	VALUES ($1, $2, $3)
	RETURNING id;
	`
	err = s.postgres.Pool.QueryRow(
		ctx,
		query,
		dto.Author,
		dto.Title,
		dto.Body,
	).Scan(
		&id,
	)
	if err != nil {
		return uuid.Nil, err
	}
	return id, nil
}

func (s *service) GetById(
	ctx context.Context,
	id uuid.UUID,
) (post Post, err error) {
	query := `
	SELECT id, author, title, body, created_at FROM posts
	WHERE id = $1;
	`
	rows, err := s.postgres.Pool.Query(ctx, query, id)
	if err != nil {
		return Post{}, err
	}
	post, err = pgx.CollectOneRow(rows, pgx.RowToStructByName[Post])
	if err != nil {
		return Post{}, err
	}
	return post, nil
}

// page: one-indexed
func (s *service) GetPaginated(
	ctx context.Context,
	page int,
	size int,
) (posts []Post, err error) {
	query := `
	SELECT id, author, title, body, created_at FROM posts
	ORDER BY created_at DESC
	LIMIT $1
	OFFSET $2;
	`
	rows, err := s.postgres.Pool.Query(ctx, query, size, (page-1)*size)
	if err != nil {
		return []Post{}, err
	}
	posts, err = pgx.CollectRows(rows, pgx.RowToStructByName[Post])
	if err != nil {
		return []Post{}, err
	}
	return posts, nil
}
