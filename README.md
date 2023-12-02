# WebAssembly and Rust Workshop Repository

Welcome to the WebAssembly and Rust Workshop Repository! This repository is designed to serve as a comprehensive resource for conducting a workshop on WebAssembly (Wasm) and Rust, covering a variety of topics and practical examples.

## Workshop Overview

In this workshop, you will find resources and projects that cover key aspects of WebAssembly and Rust, with a focus on both server-side and front-end development. This monorepo includes the following components:

1. **Workshop Agenda, Script, and Presentation Resources:** These materials are provided to guide you through the workshop, from planning to execution.

2. **Sample Project: `soup`**

   - `soup` is a sample project demonstrating the power of WebAssembly on the server. It showcases the use of multiple packages written in different languages within the same web server.
   - The project depends on multiple libraries each written in a different language and illustrates how various languages can interact within a single project.

3. **Sample Project: wasm-bindgen and Leptos**

   - This project introduces the use of `wasm-bindgen` to bridge the gap between Rust and JavaScript in a web application. Leptos, a JavaScript library, is integrated with Rust to illustrate interoperability.

4. **Sample Project: Games on the Web**

   - This project showcases the development of a simple game using a Rust game engine that compiles to WebAssembly. Participants can explore how Rust's performance and WebAssembly's portability come together in web-based games.

## Repository Structure

```plaintext
root/
│
├── workshop/             # Workshop agenda, script, and presentation resources
│
├── backend/
│   ├── soup/             # Sample project illustrating the use of multiple packages in a webserver
│   ├── c/                # A library written in the `c` programming language that can be compiled to wasm
│   ├── go/               # A library written in the `go` programming language that can be compiled to wasm
│   └── rust/             # A library written in the `rust` programming language that can be compiled to wasm
│
├── frontend/
|   ├── wasm-bindgen/     # Sample project showcasing wasm-bindgen an
│   └── leptos/           # Project showcasing leptos
│
└── game-project/         # Game project directory
```
