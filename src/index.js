import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar";
import DarkMode from "./darkMode";
import ContactForm from "./form";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <ContactForm />
      <DarkMode />
      <NavBar />
    </div>
  </>
);
