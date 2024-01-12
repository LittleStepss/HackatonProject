package database

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
)

func Useless() string { // make the numbers 																												// Du bist ein kartoffel
	var Number int
	fmt.Print("Enter a number: ")
	fmt.Scan(&Number)
	Number = Number + 4
	fmt.Println("The number take +4 :", Number)
	Number = Number - 2
	fmt.Println("The number take -2 :", Number)
	Number = Number + 14
	fmt.Println("The number take +14 :", Number)
	Number = Number - 16
	fmt.Println("The number take -16 :", Number)
	Number = Number * 16
	fmt.Println("The number take *16 :", Number)
	Number = Number / 24
	fmt.Println("The number take /24 :", Number)
	Number = Number * 24
	fmt.Println("The number take *24 :", Number)
	byteNumber := []byte(fmt.Sprintf("%d", Number))
	md5Number := md5.Sum(byteNumber)
	return hex.EncodeToString(md5Number[:])
}
