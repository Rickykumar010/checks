import './App.css'
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { Link } from "react-router-dom";
import Create from "./Create";
import Opps from './Opps';


function App() {
  return (
    <>
    <nav>
      <Link to="/register">register</Link>
      <Link to="/login">Log-in</Link>
      <Link to="/create">TODO</Link>
      <Link to="/opps">opps</Link>
    </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/opps" element={<Opps/>} />
      </Routes>
    </>
  );
}

export default App;
