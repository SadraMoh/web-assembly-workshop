# What is wasm?

WebAssembly (abbreviated Wasm) is a binary instruction format. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.

https://webassembly.org/

# What does it look like?

WebAssembly code can be represented in two forms: binary format and textual format. The binary format is Wasm’s native format, consisting of a sequence of bytes that represent the program’s instructions and data. The textual representation of WebAssembly is a more human-readable form that is similar to assembly language.

Example of what a hello world application would look like in wasm

```wasm
(module
  ;; Imports from JavaScript namespace
  (import "console" "log" (func $log (param i32 i32))) ;; Import log function
  (import "js" "mem" (memory  1)) ;; Import 1 page of memory (54kb)

  ;; Data section of our module
  (data (i32.const 0) "Hello World from WebAssembly!")

  ;; Function declaration: Exported as helloWorld(), no arguments
  (func (export "helloWorld")
      i32.const 0 ;; pass offset 0 to log
      i32.const 29 ;; pass length 29 to log (strlen of sample text)
      call $log
      )
)
```

# Where can wasm run?

WebAssembly can run in various environments, primarily in web browsers and on servers. Here's a detailed breakdown:

- Web Browsers: All major web browsers support WebAssembly. This includes Google Chrome, Safari, Edge, Firefox, and Opera. These browsers provide a WebAssembly runtime that can execute WebAssembly code directly within the browser.

- Servers: WebAssembly can also be used outside the browser, such as on servers. This enables the development of server-side applications using languages that compile to WebAssembly, like C/C++, Rust, and others.

- Other Platforms: While less common, WebAssembly can also be used in other environments that support the WebAssembly binary format. This could include game engines, embedded systems, and other types of software that require efficient execution of compiled code.

Wasmer and Wasmtime are both popular WebAssembly runtimes that aim to execute WebAssembly code in a variety of environments, including on the server.

# Why wasm?

WebAssembly (Wasm) was developed to solve several challenges in web development. Here are some of the reasons that led to its creation:

- Performance: Traditional JavaScript code runs in the browser's JavaScript engine, which is not as performant as native code. Wasm is designed to be a low-level assembly-like language that runs at near-native speed, providing languages such as C/C++, C#, Rust, and others with a compilation target so that they can run on the web.

- Portability: Wasm is a binary instruction format for a stack-based virtual machine, designed as a portable compilation target for programming languages. This makes it possible to deploy web applications on various platforms without worrying about the underlying hardware or operating system

- Safety: Wasm provides a memory-safe, sandboxed execution environment. This ensures that Wasm code cannot directly access system resources, preventing potential security issues. When embedded in the web, Wasm enforces the same-origin and permissions security policies of the browser

- Interoperability with JavaScript: Wasm is designed to run alongside JavaScript, allowing both to work together. This means that you can load Wasm modules into a JavaScript app and share functionality between the two. This allows you to take advantage of Wasm's performance and power and JavaScript's expressiveness and flexibility in the same app.

- Standardization: Wasm is being developed as a web standard via the W3C WebAssembly Working Group and Community Group with active participation from all major browser vendors. This ensures that Wasm will be supported consistently across different web browsers.

- Server-Side Execution: Initially, Wasm was mainly focused on enhancing web performance by allowing code to run closer to the hardware. However, with the introduction of WASI (WebAssembly System Interface), Wasm can now be used for server-side applications as well. WASI provides a standardized way for Wasm modules to interact with the operating system, breaking Wasm out of the browser and allowing it to run back-end applications.

By addressing these issues, Wasm has the potential to revolutionize web development by enabling the execution of high-performance applications in the browser
