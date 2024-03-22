import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LoadWasm from './LoadWasm.tsx'
import "./App.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoadWasm>
      {(wasm) => <App wasm={wasm} />}
    </LoadWasm>
  </React.StrictMode>,
)
