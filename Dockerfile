FROM mcr.microsoft.com/playwright:v1.52.0-noble

WORKDIR /app

COPY .npmrc ./.npmrc
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

RUN yarn install

COPY vite.config.ts .
COPY .storybook ./.storybook
COPY playwright.config.ts .

EXPOSE 9323

