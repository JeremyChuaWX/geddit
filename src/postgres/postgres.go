package postgres

import (
	"context"
	"log/slog"

	pgxuuid "github.com/jackc/pgx-gofrs-uuid"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Postgres struct {
	Pool *pgxpool.Pool
}

// Remember to close the pool with `defer pool.Close()`
func New(dbUrl string) *Postgres {
	dbConfig, err := pgxpool.ParseConfig(dbUrl)
	if err != nil {
		slog.Error("unable to parse pg config", err)
	}
	dbConfig.AfterConnect = func(ctx context.Context, conn *pgx.Conn) error {
		pgxuuid.Register(conn.TypeMap())
		return nil
	}
	pool, err := pgxpool.NewWithConfig(context.Background(), dbConfig)
	if err != nil {
		slog.Error("unable to create connection pool", err)
	}
	return &Postgres{Pool: pool}
}

func (p *Postgres) Close() {
	p.Pool.Close()
}
