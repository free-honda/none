up:
	docker-compose up -d
install:
	docker-compose exec app bash -c "(cd skill-typing-front && npm install)"

dev: 
	docker-compose exec app bash -c "(cd skill-typing-front && npm run dev)"
down: 
	docker-compose down 
