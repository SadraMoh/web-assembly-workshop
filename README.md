# WebAssembly and Rust Workshop Repository

Welcome to the WebAssembly and Rust Workshop Repository! This repository is designed to serve as a comprehensive resource for conducting a workshop on WebAssembly (Wasm) and Rust, covering a variety of topics and practical examples.

## Workshop Overview

In this workshop, you will find resources and projects that cover key aspects of WebAssembly and Rust, with a focus on both server-side and front-end development. This monorepo includes the following components:

1. **Workshop Agenda, Script, and Presentation Resources:** These materials are provided to guide you through the workshop, from planning to execution.

2. **Sample Project: `soup`**

   - `soup` is a sample project demonstrating the power of WebAssembly on the server. It showcases the use of multiple packages written in different languages within the same web server.
   - The project depends on multiple libraries each written in a different language and illustrates how various languages can interact within a single project.

3. **Sample Project: WASM in the browser and Leptos**

   - This project introduces the use of `wasi` modules within a web application.
   - Introducing Leptos, a full-stack Rust framework for the web with modern features ranging from functional components and signals, to server functions and symmetric rendering.

## Repository Structure

```plaintext
root/
│
├── backend/
│   ├── soup/             # Sample backend project illustrating the use of multiple packages in a webserver
│   ├── c/                # A library written in the `c` programming language that can be compiled to wasm
│   ├── go/               # A library written in the `go` programming language that can be compiled to wasm
│   └── rust/             # A library written in the `rust` programming language that can be compiled to wasm
│
├── frontend/
|   ├── broth/            # Sample frontend project illustrating the use of multiple wasi packages in a bundle
│   └── oxi/              # Project showcasing leptos
|
├── modules/              # Hands-On modules and their starter projects
|   ├── backend/          # Backend module boilerplate
|   ├── frontend/         # Frontend module boilerplate (imports already handled)
|   ├── lib/              # Instructions on how to make your own shared WASM library
│   └── fullstack.md      # Instructions on getting started with a fullstack leptos app
|
├── workshop/             # Workshop agenda, script, and presentation resources
│
*
```
