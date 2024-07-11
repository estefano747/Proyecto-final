// context/EmpleadosContext.js
import React, { createContext, useState } from 'react';

export const EmpleadosContext = createContext();

export const EmpleadosProvider = ({ children }) => {
  const [empleadosSeleccionados, setEmpleadosSeleccionados] = useState([]);

  return (
    <EmpleadosContext.Provider value={{ empleadosSeleccionados, setEmpleadosSeleccionados }}>
      {children}
    </EmpleadosContext.Provider>
  );
};
