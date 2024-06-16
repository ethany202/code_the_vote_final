import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/header.js";
import TrumpResult from "./components/TrumpResult.js";
import BidenResult from "./components/BidenResult.js";
import SteinResult from "./components/SteinResult.js";
import KennedyResult from "./components/KennedyResult.js";

import "./App.css";
import Questions from "./components/questions.js";

const API_URL = process.env.REACT_APP_API;

function App() {

  const questions = [
    {
      value: "Tax cuts are essential for boosting the economy and providing relief to American families."
    },
    {
    value: "A strong stance on immigration, including building a wall to secure the US-Mexico border, is necessary."
    },
    {
      value:"Protecting the Second Amendment and opposing stricter gun control laws is important."
    }, 
    {
      value: "Appointing conservative judges to the Supreme Court is essential in upholding the Constitution."
    },
    {
      value: "Putting America First in international relations, focusing on the interests of the United States over globalism, is the right approach."
    }, 
    {
      value:"Abortion should only be permitted in cases of rape, incest, or when the mother's life is at risk."
    }, 
    {
      value: " Schools should have the flexibility to decide how LGBTQ+ issues are taught in their curriculum."
    }, 
    {
      value: "Strengthening the US military ensures that America remains a global superpower."
    }, 
    {
      value: "Cutting bureaucratic red tape and promoting economic growth through a deregulatory agenda is important."
    }, 
    {
      value: " The United States should reduce its involvement in foreign conflicts that do not directly threaten national security"
    }

]
  return (
    <>
      <div className="container">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="Biden" element={<BidenResult/>}/>
            <Route path="Trump" element={<TrumpResult/>}/> 
            <Route path="Stein" element={<SteinResult/>}/>
            <Route path="Kennedy" element={<KennedyResult/>}/>
            <Route path="/" element={<Questions/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;