FROM node:20-alpine
ENV API_HOSTNAME=api
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .
RUN npx next build
CMD [ "npx", "next", "start", "-p", "80" ]