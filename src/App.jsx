import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Landing,
  AboutPage,
  Contacts,
  WorkingProcess,
  Loyalty,
  Delivery,
  Partnership,
  CareCosmetics,
  CardProduct,
  Login,
  Register,
} from "./pages";

import "./styles.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/process" element={<WorkingProcess />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/carecosmetics" element={<CareCosmetics />} />
        <Route path="/cardproduct" element={<CardProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
