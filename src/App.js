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
          <a href="https://github.com/Aracely0504" rel="noopener noreferrer">
            {" "}
            Aracely Campos{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Aracely0504/react-weatherforecast-app"
            rel="noopener noreferrer"
          >
            open-sourced of Github{" "}
          </a>
          and{" "}
          <a
            href="https://react-weatherforecast-app.netlify.app/"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
