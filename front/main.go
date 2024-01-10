package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

const (
	apiPort = 2020
)

var (
	apiHostname = "localhost"
)

func main() {
	_apiHostname, isSet := os.LookupEnv("API_HOSTNAME")
	if isSet {
		apiHostname = _apiHostname
	}

	http.HandleFunc("/", getRoot)
	err := http.ListenAndServe(":3333", nil)
	
}