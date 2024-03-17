import reactLogo from "./assets/react.svg";
import "./App.css";
import { bindings } from "@sadramoh/universal_lib";
import { fetchAndCompileWasm } from "./workaround-import";
import { init, WASI } from "@wasmer/wasi";

function App() {
  const initialize = () => {
    fetchAndCompileWasm().then((module) => {
      init().then(() => {
        const wasi = new WASI({
          env: {},
          args: [],
        });
        bindings
          .universal_lib({ module, wasi })
          .then((mod) => console.log(mod.hello("world")));
      });
    });
  };

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <div className="card">
        <button onClick={() => initialize()}>init</button>
      </div>
    </>
  );
}

export default App;
