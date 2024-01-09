package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/LittleStepss/HackatonProject/api/database"
)

const (
	port = 2020
)

func main() {
	// get the connection with the database
	db, err := database.GetDbConn()
	if err != nil {
		log.Printf("database.GetDbConn(): %v", err)
		return
	}
	defer db.Close()
	// Test if the connection is established
	pingErr := db.Ping()
	if pingErr != nil {
		log.Printf("db.Ping(): %v", pingErr)
		return
	}
	fmt.Println("Connection established with database !")
	// Declare the api route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("API is up ! 👍\n"))
	})
	http.HandleFunc("/teachers", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "wrong request method", http.StatusMethodNotAllowed)
			return
		}
		teachers, err := database.GetTeachers(db)
		if err != nil {
			log.Printf("database.GetTeachers: %v", err)
			http.Error(w, fmt.Sprintf("database.GetTeachers: %v", err), http.StatusInternalServerError)
			return
		}
		byteTeachers, err := json.MarshalIndent(teachers, "", "   ")
		if err != nil {
			log.Printf("json.MarshalIndent: %v", err)
			http.Error(w, fmt.Sprintf("json.MarshalIndent: %v", err), http.StatusInternalServerError)
			return
		}
		w.Write(byteTeachers)
	})
	// Start the api
	fmt.Printf("Api is up on address: 0.0.0.0:%d => http://localhost:%d 🔥\n", port, port)
	log.Printf("http.ListenAndServe: %v", http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}
