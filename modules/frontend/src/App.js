import logo from './logo.svg';
import './App.css';
import { bindings } from '@sadramoh/universal_lib';

const mod = await bindings.universal_lib();

function App() {
  // const [mod, _] = useState(() => bindings.universal_lib());
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
