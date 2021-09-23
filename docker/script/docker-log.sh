#!/bin/sh
IF_EXECED_DOCKER=`docker-compose ps`
if [ -n "$$IF_EXECED_DOCKER" ]; then
    make docker-restart
fi
docker-compose ps -a | tail -n +3 | awk '{print $1}' | xargs docker inspect | fgrep -i LogPath | awk '{print $2}' | sed -e 's/"//g' | sed -e 's/,//g' | sudo xargs rm 
IF_EXECED_DOCKER=`docker-compose ps`
if [ -n "$$IF_EXECED_DOCKER" ]; then
    make docker-restart
fi
