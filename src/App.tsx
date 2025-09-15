import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img
            src="src/assets/img/gatin.png"
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>Gatín</h1>

      <p className="read-the-docs">
        Ultimas noticias en el mundo de los gatitos
      </p>
      <iframe
        src="https://cataas.com/cat"
        height="600"
        width="600"
        title="Cat"
      ></iframe>

      <div>
        <a href="#" target="_blank">
          <img
            src="src/assets/img/mercado point.jpg"
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
    </>
  );
}

export default App;
