import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Leveluptuts React17</h1>
        <HelloWorld name="World" />
        <HelloWorld name="React" />
        <HelloWorld name="Jamstack" />
      </header>
    </div>
  );
}

function HelloWorld(props) {
  return (
      <h2>Hello {props.name}</h2>
  );
}

export default App;
