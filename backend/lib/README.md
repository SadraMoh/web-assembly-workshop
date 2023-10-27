# Universal Library

This is a universal library written in rust that builds into wasm.  
The executable is called `universal_lib.wasm` and can be used in any environment that supports wasm.  

### How to build

First make sure rustup is using the `wasm32-wasi` compile target  

```shell
rustup target add wasm32-wasi
```

Run the following command to build the library and generate a new `.wasm` file.  

```shell
cargo build --target=wasm32-wasi
```

If there are no compile errors, the new version of the library should be built into the path: 
`/target/wasm32-wasi/debug/universal_lib.wasm`.  

The wasm executable can be referenced under hte above mentioned path by projects willing to consume the library.  

You can inspect the generated executable using the `wasmer inspect` command:  

```shell
wasmer inspect universal_lib.wasm
```
