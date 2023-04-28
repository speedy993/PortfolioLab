import "reset-css";
import "./scss/main.scss";
import {createContext, useState, useEffect} from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Poke from "./components/Poke";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/logowanie"} element={<Poke></Poke>} />
        <Route path={"/rejestracja"} element={""} />
      </Routes>
    </HashRouter>
  );
}

export default App;
