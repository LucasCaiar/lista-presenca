import React, { useState } from "react";
import "./style.css";
import { Card } from "../../components/Card";

export function Home() {
  const [name, setName] = useState("");
  const [estudantes, setEstudantes] = useState([]);

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={function (event) {
          setName(event.target.value);
        }}
      />
      <button
        onClick={function (e) {
          setEstudantes([...estudantes,{name: name, time: new Date().toTimeString().substring(0,8)}]);
          setName("");
        }}
      >
        Adicionar
      </button>
      {estudantes.map(function (value) {
        return <Card name={value.name} time={value.time} />;
      })}
    </div>
  );
}
