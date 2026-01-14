import { useState } from "react";
import "./App.css";

function App() {
  const [szam, setSzam] = useState(0);

  return (
    <>
      <nav>
        <p>Counter</p>
      </nav>
      <div>
        <p>Counter value:</p>
        <span>{szam}</span>
        <div className="felso">
          <button onClick={() => setSzam((szam) => szam - 1)}> - </button>
          <button onClick={() => setSzam((szam) => szam + 1)}> + </button>
        </div>
        <div className="also">
          <button onClick={() => setSzam((szam) => szam - 10)}> -10 </button>
          <button onClick={() => setSzam((szam) => szam + 10)}> +10 </button>
        </div>
      </div>
    </>
  );
}

export default App;
