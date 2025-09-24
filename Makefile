.PHONY: build-dist clean

build-dist:
	docker compose run --rm build sh -c "yarn install --immutable --check-cache && yarn build"
	docker cp `docker compose ps -q build | head -n1`:/app/dist ./dist

clean:
	rm -rf dist
