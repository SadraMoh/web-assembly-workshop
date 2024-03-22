import wasmLogo from "./assets/wasm.svg";
import reactLogo from "./assets/react.svg";
import { UniversalLib } from "@sadramoh/universal_lib/src/bindings/universal-lib/universal-lib";
import { useState } from "react";

function App({ wasm }: AppProps) {
  // A.1 -- state to store the message
  const [value, setValue] = useState<string>('');
  
  // B.1 -- uncomment this use state to store the users name
  // const [text, setText] = useState<string>('');
  
  const handleClick = () => {
    // A.2 -- add logic here to say "hello" and show it in the UI using the `wasm` module
    // ...

    // B.3 -- add logic to say hello with the input collected from the user
    // ...
  };
  
  return (
    <>
      <img src={wasmLogo} className="logo" alt="Wasm logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
      <div className="card">
        <button onClick={handleClick}>Say Hello!</button>
      
        <b>
          {/* A.3 -- show the value in the UI */}
        </b>

        {/* B.2 -- uncomment this input */}
        {/* <input placeholder="User Name" type="text" onChange={(e) => setText(e.currentTarget.value)} value={text} /> */}
      </div>
    </>
  );
}

type AppProps = {
  wasm: UniversalLib;
};

export default App;
