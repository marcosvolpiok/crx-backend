Run Postgres:
docker run -e POSTGRES_PASSWORD=1234 postgres

Run backend:
sudo docker build -t backend .
sudo docker run -it -p 3000:3000 backend