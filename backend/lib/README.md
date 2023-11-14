# Universal Library

This is a universal library written in rust that builds into wasm.  
The library is called `universal_lib.wasm` and can be used in any environment that supports wasm.

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
`target/wasm32-wasi/debug/universal_lib.wasm`.

The wasm executable can be referenced under the above mentioned path by projects willing to consume the library.

You can inspect the generated executable using the `wasmer inspect` command:

```shell
wasmer inspect universal_lib.wasm
```

### How to publish

Make sure [wasmer](https://github.com/wasmerio/wasmer) is installed.

The [cargo wasmer](https://github.com/wasmerio/cargo-wasmer) utility can be used to publish a new version of the package to the webassembly registry.

```shell
cargo wasmer --dry-run
```

This will generate all the uploadable artefacts in `target/wasmer`.

Rerunning the command without the `--dry-run` flag will build the project and upload the artefacts to the webassembly registry.
