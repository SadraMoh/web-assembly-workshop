import fs from "fs";
import express from 'express';

import { init, WASI } from '@wasmer/wasi';

// This is needed to load the WASI library first
await init();

const app = express();

const buf = fs.readFileSync(`../../target/wasm32-wasi/debug/universal_lib.wasm`);
const module = new WASI({}, await WebAssembly.instantiate(
  new Uint8Array(buf),
  {
    wasi_snapshot_preview1: wasi.wasiImport,
  }
));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/hello', function (req, res) {
  res.send(module)
});

app.listen(3000);