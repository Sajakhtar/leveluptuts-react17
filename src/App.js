import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Leveluptuts React17</h1>
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
      </header>
    </div>
  );
}

function HelloWorld() {
  return (
      <h2>Hello World</h2>
  );
}

export default App;
