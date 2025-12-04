import React from 'react';
import EmpleadoList from './components/EmpleadoList';
import './App.css';
// Importar el componente EmpleadoList
function App() { //componente principal de la aplicación
  return (
    <div className="App"> 
      <h1>✅ Sistema de Gestión de Empleados</h1>
      <EmpleadoList />
    </div>
  );
}

export default App; //exportar el componente App como predeterminado