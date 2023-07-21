import React, { useState } from "react";
import "./style.css";
import { Card } from "../../components/Card";
import foto from "./images/img1.jpeg"

export function Home() {
  const [name, setName] = useState("");
  const [estudantes, setEstudantes] = useState([]);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Lucas</strong>
          <img src={foto} alt="foto de perfil" />
        </div>
      </header>

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
          setEstudantes([
            ...estudantes,
            { name: name, time: new Date().toTimeString().substring(0, 8) },
          ]);
          setName("");
        }}
      >
        Adicionar
      </button>
      {estudantes.map(function (value) {
        return <Card key={value.time} name={value.name} time={value.time} />;
      })}
    </div>
  );
}
