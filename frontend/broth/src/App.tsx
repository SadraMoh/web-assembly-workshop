import { createResource, createSignal } from "solid-js";
import wasmLogo from "/wasm.svg";
import "./App.css";

import cHello from "./manual-interface.js";

function App() {
  const [value, setValue] = createSignal("WebAssembly World");

  const [derived] = createResource(
    () => [value()],
    async ([val]) => await cHello(val)
  );

  return (
    <>
      <div>
        <a href="https://webassembly.org" target="_blank">
          <img src={wasmLogo} class="logo" alt="WebAssembly logo" />
        </a>
      </div>
      <h1>Wasm on the browser</h1>

      <div class="card">
        <input
          type="text"
          value={value()}
          onInput={(e) => setValue(e.currentTarget.value)}
        />
        <pre>{derived()}</pre>
      </div>
    </>
  );
}

export default App;
