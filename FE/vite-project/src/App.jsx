import './App.css'
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { Link } from "react-router-dom";



function App() {
  return (
    <>
    <nav>
      <Link to="/register">register</Link>
      <Link to="/login">Log-in</Link>

    </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
