import { useState } from "react";
import "./App.css";
import TrueFunction from "./component/true";
import FalseFunction from "./component/false";
import DetaLoadingFunction from "./component/detaLoading";


function App() {
  const [count, setCount] = useState(0);
  let [valu, setValu] = useState(true);
  function veluFunction() {
    setValu(!valu);
    // ? !valu mane valur jeita man seta ultai dao true thakle false
  }
  

  return (
    <>
      <h1 className="text-4xl m-6 font-bold">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs text-red-300 font-bold">
        Click on the Vite and React logos to learn more
      </p>
      {valu ? <TrueFunction /> : <FalseFunction />}
      {/* uporer line tar mane valu true hoile truefunction calbe ar false hoile false function calabe   */}
      <button onClick={veluFunction} className="p-2 m-2 shadow-md">
        Click Me
      </button>
  <DetaLoadingFunction/>
    </>
  );
}

export default App;
