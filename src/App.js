import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/logIn";
import MyPage from "./page/myPage";
import SignUp from "./page/signUp";
import SignUpCompleted from "./page/signUpCompleted";
import users from "./data/data.js";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/completed" element={<SignUpCompleted />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
