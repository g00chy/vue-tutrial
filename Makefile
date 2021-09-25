docker-up:
	docker-compose -p vue-tutrial up -d
docker-kill:
	docker-compose -p vue-tutrial kill
docker-logs:
	docker-compose -p vue-tutrial logs -f
docker-restart:
	make docker-kill && make docker-up
docker-log-del:
	./docker/script/docker-log.sh
