package main

import (
	"fmt"
	"net/http"
)

func handlerFunc(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, this is a basic HTTP server in Go!")
}

func main() {
	http.HandleFunc("/", handlerFunc)
	http.HandleFunc("/database/comment.go", writeComments)


	port := 8080
	fmt.Printf("The server is running on :%d\n", port)
	fmt.Println("http://localhost:8080")


	// Start the HTTP server
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
	if err != nil {
		fmt.Println(err)
	}

}
