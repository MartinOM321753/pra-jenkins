import { useState } from "react";
import './App.css';
import GlobalController from "../modules/global/global.controller";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const enviarDatos = () => {
    const body = {
      numero1: Number(num1),
      numero2: Number(num2)
    };

    GlobalController.sumar(body)
      .then(res => {
        if (res) setResultado(res.resultado);
      });
  };

  return (
    <>
      <h3>Sumar dos números</h3>

      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button className="btn btn-primary" onClick={enviarDatos}>
        Enviar a API
      </button>

      <br /><br />

      {resultado !== "" && (
        <p><strong>Resultado:</strong> {resultado}</p>
      )}
    </>
  );
}

export default App;
