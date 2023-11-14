import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';
import express from "express"
import { bindings as rustBindings } from '@sadramoh/universal_lib';
import { bindings as goBindings } from '@sadramoh/universal_lib_go';
import { loadPyodide } from 'pyodide';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/rust', async function (req, res) {
  const mod = await rustBindings.universal_lib();
  res.send(mod.hello('from Rust'));
});

app.get('/go', async function (req, res) {
  const mod = await goBindings.universal_lib_go();
  res.send(mod.hello('from Go'));
});

app.get('/python', async function (req, res) {
  const pyodide = await loadPyodide({
    indexURL: "pyodide",
  });

  await pyodide.loadPackage("micropip")

  const instructions = (await readFile(resolve(__dirname, 'src/chart/main.py'))).toString();
  const result = await pyodide.runPythonAsync(instructions);

  res.send(`<pre>${result}</pre>`);
});

app.listen(3000);