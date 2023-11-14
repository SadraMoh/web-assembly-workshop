# Universal Library (Go)

This is a universal library written in go and is compiled down to wasi using the `tinygo` compiler.  
The library is called `universal_lib_go.wasm` and can be used in any environment that supports wasm.

### How to build

Using the `tinygo` compiler:

```shell
tinygo build -target=wasi -o universal_lib_go.wasm main.go
```

If there are no compile errors, the new version of the library should be into the root.

The wasm executable can be referenced by projects willing to consume the library.

You can inspect the generated executable using the `wasmer inspect` command:

```shell
wasmer inspect universal_lib_go.wasm
```

### How to publish

Make sure [wasmer](https://github.com/wasmerio/wasmer) is installed.

```shell
wasmer publish --dry-run
```

Rerunning the command without the `--dry-run` flag will build the project and upload the artefacts to the webassembly registry.

**NOTE:** Don't forget to build before publishing the a new version to the registry.
