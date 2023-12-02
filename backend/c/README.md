# Universal Library (C)

This is a universal library written in C and is compiled down to wasi using the `wasi-sdk` and `clang` compiler.  
The library can be used in any environment that supports wasm.

### How to build

Make sure the following tools are installed:

- cmake
- clang
- ninja

Download prebuilt built `wasi-sdk`

```shell
cd wasi-sdk
NINJA_FLAGS=-v make package

export WASI_VERSION=20
export WASI_VERSION_FULL=${WASI_VERSION}.0
wget https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-${WASI_VERSION}/wasi-sdk-${WASI_VERSION_FULL}-linux.tar.gz
tar xvf wasi-sdk-${WASI_VERSION_FULL}-linux.tar.gz

export WASI_SDK_PATH=`pwd`/wasi-sdk-${WASI_VERSION_FULL}
CC="${WASI_SDK_PATH}/bin/clang --sysroot=${WASI_SDK_PATH}/share/wasi-sysroot"
```

Build the source to `wasi`

```shell
$CC main.c \
-o universal_lib_c.wasm \
--target=wasm32-wasi \
-Wl,--export=malloc \
-Wl,--export=free \
-Wl,--export=realloc \
-Wl,--export=calloc \
-Wl,--export=hello \
-Wl,--no-entry \
-nostartfiles

wasmer inspect universal_lib_c.wasm
```
