///
/// With respect to the original blog by Philippe Charrière
/// https://www.wasm.builders/k33g_org/an-essay-on-the-bi-directional-exchange-of-strings-between-the-wasm-module-with-tinygo-and-nodejs-with-wasi-support-3i9h
/// 

import wasmUrl from "/universal_lib_c.wasm?url";
import { init, WASI } from "@wasmer/wasi";

await init();

const wasi = new WASI({
  env: {},
  args: [],
});

/// --- Wasm Setup

const moduleBytes = fetch(wasmUrl);
const module = await WebAssembly.compileStreaming(moduleBytes);
// Instantiate the WASI module
const instance = await wasi.instantiate(module, {});

/**
 * 
 * @param {string} stringParameter 
 * @returns 
 */
async function cHello(stringParameter) {

  /// -- Memory Preperation

  const bytes =
    new TextEncoder('utf8').encode(stringParameter);

  // © Completely inspired by:
  // https://radu-matei.com/blog/practical-guide-to-wasm-memory/
  // Copy the contents of the string into the module's memory
  const ptr = instance.exports.malloc(bytes.length);
  const mem = new Uint8Array(
    instance.exports.memory.buffer, ptr, bytes.length
  );
  mem.set(new Uint8Array(bytes));

  /// -- Function Invocation

  let helloPointerSize =
    instance.exports.hello(ptr, bytes.length);

  // Extract string start pointer and size from single return value
  const MASK = BigInt(0b11111111111111111111111111111111);
  let stringPtrPosition = Number(helloPointerSize >> BigInt(32));
  let stringSize = Number(helloPointerSize & MASK);

  const completeBufferFromMemory =
    new Uint8Array(instance.exports.memory.buffer);

  const extractedBuffer = completeBufferFromMemory.slice(
    stringPtrPosition, stringPtrPosition + stringSize
  );

  const str = new TextDecoder("utf8").decode(extractedBuffer);

  return str;
}

export default cHello;