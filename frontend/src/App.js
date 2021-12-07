import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./components/Home"
import MoviesIndex from "./components/MoviesIndex"
import MoviesForm from "./components/MoviesForm"
import Nav from "./components/Nav"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/movies" component={MoviesIndex}/>
          <Route exact path="/movies/new" component={MoviesForm}/>
        </Routes>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
