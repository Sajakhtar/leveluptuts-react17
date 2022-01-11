import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Leveluptuts React17</h1>
        <Counter />
        <HelloWorld name="World" greeting="Yo" />
        <HelloWorld name="React" />
        <HelloWorld name="Jamstack" />
      </header>
    </div>
  );
}

function HelloWorld({ greeting = "Hello", name }) {
  return (
      <h2>{greeting} {name}</h2>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string
}

export default App;
