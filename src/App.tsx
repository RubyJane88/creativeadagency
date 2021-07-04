import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "router";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
