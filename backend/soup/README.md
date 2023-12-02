# Language Soup WebServer

An express.js webserver utilizing the power of webassembly to host code from multiple different languages.

### Go

To be able to run wasi modules compiled from go, the `wasm` module must be generated and be available on disk.
Follow the instructions in `go/README.md` on how to generate the `wasm` module.

### Python

To be able to run python on the server in a sandboxed environment, a release version of `pyodide` must be available in the root of the project.

To install `pyodide`, head over to [the pyodide repository](https://github.com/pyodide/pyodide/releases) and download a release build of the interperter. The filename should look like this: `pyodide-<X.XX.X>.tar.bz2`. Extract the contents of this file to the root of the project in a folder named `pyodide/`.
