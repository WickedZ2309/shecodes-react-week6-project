import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Montreal" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/WickedZ2309"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrea G.
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/WickedZ2309/shecodes-react-week6-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://shecodes-react-week6-project-ag.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
