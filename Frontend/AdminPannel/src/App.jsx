import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Load from "./Components/Load";
import Login from "./Components/LoginPage";
import SignUp from "./Components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/load" element={<Load />} />
      </Routes>
    </div>
  );
}

export default App;
