import express from "express"
import { bindings } from '@sadramoh/universal_lib';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/hello', async function (req, res) {
  const mod = await bindings.universal_lib();
  res.send(mod.hello('from Rust'));
});

app.listen(3000);