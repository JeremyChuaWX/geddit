package post

import (
	"time"

	"github.com/gofrs/uuid/v5"
)

type Post struct {
	Id        uuid.UUID `db:"id"`
	Author    uuid.UUID `db:"author"`
	Title     string    `db:"title"`
	Body      string    `db:"body"`
	CreatedAt time.Time `db:"created_at"`
}

type CreateDto struct {
	Author uuid.UUID
	Title  string
	Body   string
}
