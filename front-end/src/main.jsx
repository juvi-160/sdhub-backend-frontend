import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import AddUser from "./pages/AddUser.jsx"
import UpdateUser from "./pages/UpdateUser.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:id" element={<UpdateUser/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
