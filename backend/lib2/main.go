package main

import "fmt"

//go:wasm-module yourmodulename
//export hello
func hello(name string) string {
	greeting := fmt.Sprintf("Hello, %s!", name)
  return greeting
}

// main is required for the `wasi` target, even if it isn't used.
func main() {}