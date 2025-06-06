FROM mcr.microsoft.com/playwright:v1.52.0-noble

WORKDIR /app

COPY .npmrc ./.npmrc
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY vite.config.ts .
COPY playwright.config.ts .

RUN yarn install

EXPOSE 9323

