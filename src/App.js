import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstComponent />} />
        <Route path="/second" element={<SecondComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
