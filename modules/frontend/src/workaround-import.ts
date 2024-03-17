import wasmUrl from "/universal_lib.wasm?url";

export async function fetchAndCompileWasm() {
  const response = await fetch(wasmUrl);
  const module = await WebAssembly.compileStreaming(response);

  return module;
}
