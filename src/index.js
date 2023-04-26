import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Fruits from "./Fruits";
import Pulses from "./Pulses";
import Snacks from "./Snacks";
import Vegetable from "./Vegetable";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="fruits" element={<Fruits />}></Route>
        <Route path="vegetable" element={<Vegetable />}></Route>
        <Route path="Pulses" element={<Pulses />}></Route>
        <Route path="snacks" element={<Snacks />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
