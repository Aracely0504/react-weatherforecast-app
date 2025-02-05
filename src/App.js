import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Aracely0504"> Aracely Campos </a> and is{" "}
          <a href="https://github.com/Aracely0504/react-weatherforecast-app">
            open-sourced of Github{" "}
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
