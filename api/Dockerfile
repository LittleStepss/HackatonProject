FROM golang:1.21-alpine
ENV DB_HOSTNAME=db
WORKDIR /app
COPY . .
RUN go build -o api .
CMD [ "./api" ]