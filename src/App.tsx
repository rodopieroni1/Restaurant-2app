import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Details } from "./pages/details";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:idRestaurant" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
