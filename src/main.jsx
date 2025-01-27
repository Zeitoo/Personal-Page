import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import HomeLayout from "./HomeLayout";

createRoot(document.getElementById("App")).render(
    <StrictMode>
        <BrowserRouter>
            <HomeLayout />
        </BrowserRouter>
    </StrictMode>
);
