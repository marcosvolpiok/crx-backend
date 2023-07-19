Run Postgres:
docker run -e POSTGRES_PASSWORD=1234 postgres

Run backend:
sudo docker network create legaltech

sudo docker build -t backend .
sudo docker run --net legaltech --name backend -it -p 3000:3000 backend
start backend
