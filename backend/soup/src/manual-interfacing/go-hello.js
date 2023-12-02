///
/// With respect to the original blog by Philippe Charrière
/// https://www.wasm.builders/k33g_org/an-essay-on-the-bi-directional-exchange-of-strings-between-the-wasm-module-with-tinygo-and-nodejs-with-wasi-support-3i9h
/// 

import { WASI } from "wasi";
import fs from 'fs';

const WASM_MODULE_PATH = "../go/universal_lib_go.wasm";

/**
 * 
 * @param {string} stringParameter 
 * @returns 
 */
async function goHello(stringParameter) {

  /// --- Wasm Setup

  const wasi = new WASI();
  const importObject = { wasi_snapshot_preview1: wasi.wasiImport }; // snapshot of the wasi interface

  const wasm = await WebAssembly.compile(
    fs.readFileSync(WASM_MODULE_PATH)
  );
  const instance =
    await WebAssembly.instantiate(wasm, importObject);

  wasi.start(instance);

  /// -- Memory Preperation

  const bytes =
    new TextEncoder("utf8").encode(stringParameter);

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

export default goHello;