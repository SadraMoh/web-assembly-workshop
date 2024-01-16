- **Figma**
  Figma uses WebAssembly (Wasm). Figma is a browser-based interface design tool with a powerful 2D WebGL rendering engine that supports very large documents. The product is written in C++, which can easily be compiled into WebAssembly. This adoption of WebAssembly has significantly improved Figma's load time, making it much faster.

  https://news.ycombinator.com/item?id=37387122

- **Autodesk AutoCAD Web**
  Autodesk, the company that owns AutoCAD, has indeed ported AutoCAD to the browser. The AutoCAD Web App, which was presented at Google I/O 2018, runs on WebAssembly.

  WebAssembly allows applications compiled in languages like C++ to run in the browser at near-native speed. By porting AutoCAD to WebAssembly, Autodesk was able to leverage this technology to bring the power of AutoCAD to the web, accessible via a simple link.

  https://webassembly.eu

- **Wasmboy**
  WasmBoy is a Game Boy emulator written in Rust and compiled to WebAssembly. It is able to run Game Boy games in the browser at near-native speeds.

  https://madewithwebassembly.com/showcase/wasmboy

- **Various Doom Ports**
  There are several projects that have implemented the classic game Doom using WebAssembly (Wasm), including:

  - Cloudflare's Doom-Wasm: This project is a WebAssembly port of Doom with multiplayer support. It runs on top of Cloudflare's Edge Network using Workers, Websockets, and Durable Objects. The project is hosted on GitHub and can be accessed through the Silent Space Marine website.

  https://github.com/cloudflare/doom-wasm

  - Wasm-doom: Based on Chocolate Doom and Crispy Doom, this port integrates limit-removing and bugfix parts from both. It supports Vanilla Doom compatibility, limit-removing maps, DeHackEd and BEX lump support, music pack from web source support with fallback to OPL emulation, mobile compatibility, touch and gamepad controller support, and custom browser events for integration. It is used in WAD Commander, a browser-based launcher for Doom.

  https://doom.fandom.com/wiki/Wasm-doom

  - Doom 3 Demo: This project provides an online demonstration running the Doom 3 demo using WebAssembly.

  https://wasm.continuation-labs.com/d3demo
