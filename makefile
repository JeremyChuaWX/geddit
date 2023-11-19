docker-up:
	docker compose --env-file .env.dev -f compose.dev.yaml up --build

docker-down:
	docker compose --env-file .env.dev -f compose.dev.yaml down --remove-orphans --volumes
