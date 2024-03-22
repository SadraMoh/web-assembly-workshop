/** 
 * Workaround to [This Github Issue](https://github.com/wasmerio/wasmer-js/issues/305)
 * */

import { bindings } from "@sadramoh/universal_lib";
import { init, WASI } from "@wasmer/wasi";
import { ReactNode, useEffect, useState } from "react";
import { UniversalLib } from "@sadramoh/universal_lib/src/bindings/universal-lib/universal-lib";
import wasmUrl from "/universal_lib.wasm?url";

/**
 * fetch and compile the .wasm module and make it ready to be used
 */
export async function fetchAndCompileWasm() {
  const response = await fetch(wasmUrl);
  const module = await WebAssembly.compileStreaming(response);

  return module;
}

/**
 * Component that fetches the wasm file and compiles it on runtime.
 */
function LoadWasm({
  children,
}: {
  children: (wasm: UniversalLib) => ReactNode;
}) {
  const [wasm, setWasm] = useState<UniversalLib | undefined>();

  useEffect(() => {
    fetchAndCompileWasm().then((module) => {
      init().then(() => {
        const wasi = new WASI({
          env: {},
          args: [],
        });
        bindings.universal_lib({ module, wasi }).then(setWasm);
      });
    });
  }, []);

  return (
    <div id="LoadWasm">{wasm ? children(wasm) : <span>Loading Wasm...</span>}</div>
  );
}

export default LoadWasm;
