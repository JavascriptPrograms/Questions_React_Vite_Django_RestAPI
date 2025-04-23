import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route, Link} from "react-router-dom";
import Add_Question from './components/Add_Question';
import Show_Question from './components/show_Question';
import Searh_Question from './components/Search_Question';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-sm bg-primary">

        <div className="container-fluid">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/add_question">Add Question</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/show_question">Show Question</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/search_question">Searh Question</Link>
            </li>
          </ul>
        </div>

      </nav>
      <Routes>
          <Route path="/" element={<Home />} />cls
          <Route path="/add_question" element={<Add_Question />} />
          <Route path="/show_question" element={<Show_Question />} />
          <Route path="/search_question" element={<Searh_Question />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default App
