import { useState } from "react";
import './App.css';
import GlobalController from "../modules/global/global.controller";

function App() {
  const [data, setData] = useState("");

  return (
    <>
      <p>Hola, {data}</p>

      <button 
        className="btn btn-primary"
        onClick={() => {
          GlobalController.getData().then(res => {
            if (res) setData(res.message);
          });
        }}
      >
        Llamar API
      </button>
    </>
  );
}

export default App;
