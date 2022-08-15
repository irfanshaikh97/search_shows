import React from "react";
import Navbar from "./components/Navbar";
import ShowDetails from "./components/ShowDetails";
import Shows from "./components/Shows";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Shows />} />
        <Route path="show/:id" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
