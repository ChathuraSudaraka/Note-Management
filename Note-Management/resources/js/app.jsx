import "./bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./Components/Login";
import NoteApp from "./Components/NotePad";
import SignUpForm from "./Components/SignUp";
import History from "./Components/History";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<NoteApp />} />
            <Route path="/signin" element={<LoginForm />}></Route>
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/history" element={<History />} />
        </Routes>
    </BrowserRouter>
);

