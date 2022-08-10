import React, { useEffect, useState } from "react";

function ClockFunctionalComponent() {
  const [generalState, setGeneralState] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  });

  function tick() {
    setGeneralState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      {" "}
      <div>
        <h2>
          Hora Actual:
          {generalState.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {generalState.nombre} {generalState.apellidos}
        </h3>
        <h1>Edad: {generalState.edad}</h1>
      </div>
    </div>
  );
}

export default ClockFunctionalComponent;
