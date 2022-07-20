import React from "react";

import "./App.css";

import { useSelector } from "react-redux";
import { forecast } from "./features/Test/TestSlice";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
function App() {
  return (
    <div>
      <Header />
      <Main></Main>
    </div>
  );
}

export default App;
