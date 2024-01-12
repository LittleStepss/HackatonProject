FROM tomyj/my-env:go
ENV DB_HOSTNAME=db
WORKDIR /app
COPY . .
RUN go build -o api .
CMD [ "./api" ]