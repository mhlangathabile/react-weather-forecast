import logo from "./logo.svg";
import Weather from "./Weather";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Thabile P Mhlanga and is{" "}
          <a
            href="https://github.com/mhlangathabile/react-weather-forecast"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
