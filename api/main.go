package main

import (
	"fmt"
	"log"
	"net/http"
)

const (
	port = 2020
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("API is up ! 👍\n"))
	})

	// http.HandleFunc("/api/database/getTeacher", GetTeachers)

	http.HandleFunc("/teacher", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, this is a test %q")
	})

	fmt.Printf("api is up on address: 0.0.0.0:%d http://localhost:%d🔥\n", port, port)
	log.Printf("http.ListenAndServe: %v", http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}

// func GetTeachers(db *sql.DB) {

// 	db.Exec(GetTeachers())
// 	db.Query("Here is the list of Teachers :")
// }
