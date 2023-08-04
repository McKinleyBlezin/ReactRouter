import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";

//For line 20 we wouldnt need a home route b/c we dont have a home component correct? and do we have to create a navbar component to introduce import link?
function App() {
  const navigate = useNavigate();

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section"></div>
        <Routes>
          <Route path="/" element={<h1> Home Page</h1>} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
