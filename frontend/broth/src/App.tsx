import { createSignal } from "solid-js";
import wasmLogo from "/wasm.svg";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        <a href="https://webassembly.org" target="_blank">
          <img src={wasmLogo} class="logo" alt="WebAssembly logo" />
        </a>
      </div>
      <h1>Wasm on the browser</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
      </div>
    </>
  );
}

export default App;
