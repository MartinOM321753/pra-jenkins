docker network create  --driver bridge sgu-net

docker volume create sgu-volume

docker compose build --no-cache

docker compose up --build -d
