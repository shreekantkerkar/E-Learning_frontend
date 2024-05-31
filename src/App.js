// App.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./e-learning/Home";
import SEContent from "./e-learning/SEContent";
import TEContent from "./e-learning/TEContent";
import AddChapter from "./e-learning/AddChapter";
import UpdateChapter from "./e-learning/UpdateChapter";
import Login from "./e-learning/Login";
import Register from "./components/Register";
import { UserProvider } from "./UserContext"; // Import the UserProvider
import Footer from "./e-learning/Footer";
import BEContent from "./e-learning/BEContent";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        {" "}
        {/* Wrap your App with UserProvider */}
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/seContent" element={<SEContent />}></Route>
            <Route path="/teContent" element={<TEContent/>}></Route>
            <Route path="/beContent" element={<BEContent/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route
              path="/addChapter/:subjectId"
              element={<AddChapter />}
            ></Route>
            <Route
              path="/updateChapter/:subjectId/:chapterId"
              element={<UpdateChapter />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
          <Footer />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
