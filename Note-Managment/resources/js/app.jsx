
import "./bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./Components/Login";
import NoteApp from "./Components/NotePad";
import SignUpForm from "./Components/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <LoginForm />
        <SignUpForm />
        <NoteApp />
    </React.StrictMode>
);

