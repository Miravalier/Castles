all: frontend backend


.PHONY: frontend
frontend:
	sudo rm -rf /var/www/castles
	sudo cp -r frontend/ /var/www/castles


.PHONY: backend
backend:
	cd backend; docker-compose down && docker-compose build && docker-compose up -d
