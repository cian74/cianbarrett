import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import CatPics from "./CatPics";

function Home() {
  return (
    <div className="centered">
      <div className="content">
        <h1>cian barrett</h1>
        <div className="links">
          <a href="https://github.com/cian74" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://www.linkedin.com/in/cian-barrett-819862277/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="mailto:cianbarrett3011@gmail.com" target="_blank" rel="noopener noreferrer">email</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;