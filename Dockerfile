FROM node:20-alpine

RUN apk add --no-cache bash python3 make g++

RUN corepack enable

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --immutable --check-cache

COPY . .

CMD ["yarn", "build"]
