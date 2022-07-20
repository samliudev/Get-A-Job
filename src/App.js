import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import About from "./components/About";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} >
          HomePage
        </Route>
        <Route path="/todos" element={<Todos />}>
          Todos
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
