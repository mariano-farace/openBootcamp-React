// Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.

// Si el contacto está conectado, se debe mostrar: Contacto En Línea

// Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

// Renderizado de componentes en la solución:

// El Componente A debe ser renderizado dentro del componenet App.js del proyecto.

// El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

// Recordatorio: Haz uso de Proptypes adecuadamente

import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact";

const ComponentB = ({ contact }) => {
  return (
    <div>
      <div>Contact Name:{contact.name}</div>
      <div>Contact Last Name: {contact.lastName}</div>
      <div>Contact Email: {contact.email}</div>
      <div>
        Status: {contact.connected ? "Contact Online" : "Contact Not Available"}
      </div>
    </div>
  );
};

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentB;
