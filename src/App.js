// App.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./e-learning/Home";
import SEContent from "./e-learning/SEContent";
import AddChapter from "./e-learning/AddChapter";
import UpdateChapter from "./e-learning/UpdateChapter";
import Login from "./e-learning/Login";
import Register from "./components/Register"; // Import the Register component

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/seContent" element={<SEContent />}></Route>
          <Route path="/addChapter/:subjectId" element={<AddChapter />}></Route>
          <Route
            path="/updateChapter/:subjectId/:chapterId"
            element={<UpdateChapter />}
          ></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route> // Add route for Register component
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
