.PHONY: build-dist clean

build-dist:
	docker compose run --name hugerte-build --no-deps build sh -c "yarn install --immutable --check-cache && yarn build"
	docker cp hugerte-build:/app/dist ./dist
	docker rm hugerte-build

clean:
	rm -rf dist
