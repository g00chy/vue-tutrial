docker-up:
	docker-compose -p vue-tutrial up -d node
docker-kill:
	docker-compose -p vue-tutrial kill node
docker-logs:
	docker-compose -p vue-tutrial logs -f node
docker-restart:
	make docker-kill && make docker-up
docker-log-del:
	./docker/script/docker-log.sh
