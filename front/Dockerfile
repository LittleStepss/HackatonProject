FROM tomyj/my-env:node
ENV API_HOSTNAME=api
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .
RUN npx next build
CMD [ "npx", "next", "run", "-p", "80" ]