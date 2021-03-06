import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Counter } from './Counter';
// import { Accordion } from './Accordion';
// import { Input } from './Input';
import { MoviesList } from './movies/MoviesList';
import { MovieDetail } from './movies/MovieDetail';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <h1>Leveluptuts React17</h1>
        <Input />
        <Accordion />
        <Counter />
        <HelloWorld name="World" greeting="Yo" />
        <HelloWorld name="React" />
        <HelloWorld name="Jamstack" /> */}

        <Router>
          <Routes>
            {/* <Route path="/">
              <MoviesList />
            </Route> */}
            <Route path='/' element={<MoviesList/>} />
            <Route path='/movie/:id' element={<MovieDetail/>} />
          </Routes>
        </Router>
      {/* </header> */}
    </div>
  );
}

// function HelloWorld({ greeting = "Hello", name }) {
//   return (
//       <h2>{greeting} {name}</h2>
//   );
// }

// HelloWorld.propTypes = {
//   name: PropTypes.string,
//   greeting: PropTypes.string
// }

export default App;
