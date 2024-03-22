import wasmLogo from "./assets/wasm.svg";
import reactLogo from "./assets/react.svg";
import { UniversalLib } from "@sadramoh/universal_lib/src/bindings/universal-lib/universal-lib";
import { useState } from "react";
import "./App.css";

function App({ wasm }: { wasm: UniversalLib }) {
  // A.1 -- state to store the message
  const [value, setValue] = useState<string>('');
  
  const handleClick = () => {
    // A.2 -- add logic here to say hello to the user and show it in the UI using the `wasm` module
    // ...
  };

  // B.2 -- uncomment this change handler
  // const handleChange = () => {
  //   // B.3 -- add logic to update the state on every keystroke
  //   // ...
  // }
  
  return (
    <>
      <img src={wasmLogo} className="logo" alt="Wasm logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
      <div className="card">
        <button onClick={handleClick}>Say Hello!</button>
      
        <b>
          {/* A.3 -- show the value in the UI */}
        </b>

        {/* B.1 -- uncomment this input */}
        {/* <input type="text" onChange={(e) => setValue(e.currentTarget.value)} value={value} /> */}
      </div>
    </>
  );
}

export default App;
