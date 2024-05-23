import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";
import Home from "./home";
import Cart from "./Cart";

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart/:id" element={<Cart/>}/>
      </Routes>
    </Router>
  );
};

export default App;
