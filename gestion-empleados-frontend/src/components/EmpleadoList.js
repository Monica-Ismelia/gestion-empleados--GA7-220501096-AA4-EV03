import React, { useState, useEffect } from 'react';
import { EmpleadoService } from '../services/EmpleadoService';
import EmpleadoForm from './EmpleadoForm'; 
// Importar el componente EmpleadoForm

export default function EmpleadoList() { //componente funcional para listar empleados y manejar CRUD
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [empleadoEditar, setEmpleadoEditar] = useState(null);

  // Cargar empleados al inicio
  useEffect(() => { 
    EmpleadoService.listar() //llamar al servicio para listar empleados
      .then(data => {
        setEmpleados(data);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);//guardar el mensaje de error en el estado
        setCargando(false);
      });
  }, []);

  // Función para refrescar la lista
  const refrescarLista = () => {
    setCargando(true);
    EmpleadoService.listar()
      .then(data => {
        setEmpleados(data);
        setCargando(false);
        setEmpleadoEditar(null);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  };

  // Manejar creación/actualización
  const manejarGuardar = (empleado) => {
    if (empleado.id) {
      // Actualizar empleado existente
      EmpleadoService.actualizar(empleado.id, empleado)
        .then(() => refrescarLista())
        .catch(err => setError(err.message));
    } else {
      // Crear nuevo empleado
      EmpleadoService.crear(empleado)
        .then(() => refrescarLista())
        .catch(err => setError(err.message));
    }
  };

  // Manejar eliminación de empleado
  const manejarEliminar = (id) => {
    if (window.confirm('¿Seguro que desea eliminar este empleado?')) {
      EmpleadoService.eliminar(id)
        .then(() => refrescarLista())
        .catch(err => setError(err.message));
    }
  };

  if (cargando) return <p>Cargando empleados...</p>; //mostrar mensaje de carga
  if (error) return <p style={{color: 'red'}}>Error: {error}</p>;

  return (
    <div>
      <h2>CRUD de Empleados</h2>

      {empleadoEditar ? (
        <EmpleadoForm 
          empleado={empleadoEditar} 
          onSave={manejarGuardar}
          onCancel={() => setEmpleadoEditar(null)}
        />
      ) : (
        <button onClick={() => setEmpleadoEditar({})}>➕ Nuevo Empleado</button>
      )}

      <table border="1" style={{marginTop: '20px'}}> {/* tabla para mostrar la lista de empleados */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Salario</th>
            <th>Fecha de Ingreso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody> {/* cuerpo de la tabla con los datos de empleados */}
          {empleados.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nombre}</td>
              <td>{emp.correo}</td>
              <td>{emp.salario}</td>
              <td>{emp.fechaIngreso}</td>
              <td>
                <button onClick={() => setEmpleadoEditar(emp)}>✏️ Editar</button>
                <button onClick={() => manejarEliminar(emp.id)} style={{marginLeft: '10px', color: 'red'}}>🗑️ Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {empleados.length === 0 && <p>No hay empleados registrados.</p>} {/* mensaje si no hay empleados */}
    </div>
  );
}