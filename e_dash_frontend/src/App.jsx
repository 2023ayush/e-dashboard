/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import "./App.css";
import SignUp from "./components/SignUp.jsx";

const App = () => {
  return (
    <div className="APP">
      <BrowserRouter>
        <Nav />
        <SignUp />
        <Routes>
          <Route path="/" element={<h1>Product Listing Component</h1>} />
          <Route path="/add" element={<h1>Add Component</h1>} />
          <Route path="/update" element={<h1>Update Component</h1>} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
