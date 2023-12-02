package main

import (
  "unsafe"
  "strings"
)

//export hello
func hello(subject *uint32, length int) uint64 {

  var subjectStr strings.Builder
  pointer := uintptr(unsafe.Pointer(subject))
  for i := 0; i < length; i++ {
    s := *(*int32)(unsafe.Pointer(pointer + uintptr(i)))
    subjectStr.WriteByte(byte(s))
  }

  output := subjectStr.String()

  message := "Hello " + output + "!"
  buf := []byte(message)
  bufPtr := &buf[0]
  unsafePtr := uintptr(unsafe.Pointer(bufPtr))

  ptr := uint32(unsafePtr)
  size := uint32(len(buf))

  ret := (uint64(ptr) << uint64(32)) | uint64(size)

  return ret
}

// main is required for the `wasi` target, even if it isn't used.
func main() {}