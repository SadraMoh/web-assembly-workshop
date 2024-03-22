# How to make a library

```shell
cargo init --lib
```

```shell
rustup target add wasm32-wasi
```

```shell
cargo build --target=wasm32-wasi
```

```shell
touch <INTERFACE-FILE>.wai
```

Make sure these configs are set in the `Cargo.toml`

```toml

[package]
name = "<PACKAGE NAME>"
version = "<0.0.1>"
edition = "2021"
description = "<PACKAGE DESCRIPTION>"

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
wai-bindgen-rust = "0.2.3"

[package.metadata.wasmer]
namespace = "<WASMER.IO ACCOUNT HANDLE>"                            # same as your wasmer.io account handle
abi = "wasi"                                                        # choose "wasi" for both javascript and python bindings
bindings = { wai-version = "0.1.0", exports = "<INTERFACE-FILE>.wai" } # should not contain `_` underscores

```


## How to publish

Make sure [wasmer](https://github.com/wasmerio/wasmer) is installed.
```shell
curl https://get.wasmer.io -sSfL | sh
```

The [cargo wasmer](https://github.com/wasmerio/cargo-wasmer) utility can be used to publish a new version of the package to the webassembly registry.
```shell
cargo install cargo-wasmer --locked
```

```shell
cargo wasmer --dry-run
```
