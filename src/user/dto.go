package user

import "github.com/gofrs/uuid/v5"

type User struct {
	Id           uuid.UUID `db:"id"`
	Username     string    `db:"username"`
	Email        string    `db:"email"`
	PasswordHash string    `db:"password_hash"`
}

type CreateDto struct {
	Username     string
	Email        string
	PasswordHash string
}
