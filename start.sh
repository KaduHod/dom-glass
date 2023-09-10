#!/bin/bash

CONTAINER=$(docker ps | grep "dom-glass")

subir_dom_glass(){
	docker compose up
}

start_css(){
	docker exec -it dom-glass npm run css
}
	
if [ -z "$CONTAINER" ]; 
then
	echo "dom glass container não subiu"
	echo "subindo container"
	subir_dom_glass
fi

start_css
