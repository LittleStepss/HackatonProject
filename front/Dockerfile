FROM tomyj/my-env:node
ENV API_HOSTNAME=api
WORKDIR /app
COPY . .
RUN npm ci
RUN npx next build
CMD [ "npx", "next", "run", "-p", "80" ]