import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import Inventory from "./Pages/Inventory"
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="row align-items-center">
          <div className="col-md-1">
            <img
              className="logo img-fluid mb-2"
              src={logo}
              alt="24 Hour Shifts"
              title="24 Hour Shifts Apparel | Home"
            />
          </div>
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border border-dark"
                  placeholder="Search..."
                />
              </div>
              <div className="col-md-6 text-center">
                <Nav />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<h1>Hello, from my router</h1>} />
        <Route path="/shopping" element={<Inventory />}/>
      </Routes>
    </div>
  );
}

export default App;
