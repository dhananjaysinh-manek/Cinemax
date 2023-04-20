import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleMovie from "./pages/SingleMovie";
import Header from "./components/Header";
import Login from "./pages/Login";
import Collection from "./pages/Collection";
import Trending from "./pages/Trending";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<SingleMovie />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Collection" element={<Collection/>} />
          <Route path="/Trending" element={<Trending/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
