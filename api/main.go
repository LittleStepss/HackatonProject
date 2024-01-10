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
	http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "wrong request method", http.StatusMethodNotAllowed)
			return
		}
		var payload struct {
			Mail     string `json:"mail"`
			Password string `json:"password"`
		}
		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			log.Printf("json.NewDecoder(r.Body).Decode(&payload): %v", err)
			http.Error(w, fmt.Sprintf("json.NewDecoder(r.Body).Decode(&payload): %v", err), http.StatusInternalServerError)
			return
		}
		res, logged, err := database.Login(db, payload.Mail, payload.Password)
		if err != nil {
			log.Printf("database.Login(db, payload.Mail, payload.Password): %v", err)
			http.Error(w, fmt.Sprintf("database.Login(db, payload.Mail, payload.Password): %v", err), http.StatusInternalServerError)
			return
		}
		if !logged {
			w.WriteHeader(http.StatusUnauthorized)
		}
		w.Write([]byte(res))
	})
	// Start the api
	fmt.Printf("Api is up on address: 0.0.0.0:%d => http://localhost:%d 🔥\n", port, port)
	log.Printf("http.ListenAndServe: %v", http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}
