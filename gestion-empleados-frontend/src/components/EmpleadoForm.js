import React, { useState } from 'react'; //importar useState para manejar el estado del formulario en react

export default function EmpleadoForm({ empleado, onSave, onCancel }) { //componente funcional que recibe props: empleado (objeto con datos del empleado), onSave (función para guardar), onCancel (función para cancelar)
  const [formData, setFormData] = useState({ //estado local para los datos del formulario
    id: empleado.id || null,//si el empleado tiene id, usarlo; si no, null
    nombre: empleado.nombre || '',//si el empleado tiene nombre, usarlo; si no, cadena vacía
    correo: empleado.correo || '',//si el empleado tiene correo, usarlo; si no, cadena vacía
    salario: empleado.salario || '',//si el empleado tiene salario, usarlo; si no, cadena vacía
    fechaIngreso: empleado.fechaIngreso || ''//si el empleado tiene fecha de ingreso, usarlo; si no, cadena vacía
  });


  const handleChange = (e) => { //función para manejar cambios en los campos del formulario
    setFormData({ //actualizar el estado del formulario
      ...formData, //mantener los datos actuales
      [e.target.name]: e.target.value//actualizar el campo que cambió
    });//actualizar el estado del formulario
  };

  const handleSubmit = (e) => { //función para manejar el envío del formulario
    e.preventDefault(); //prevenir el comportamiento por defecto del formulario
    // Validación simple de campos obligatorios
    if (!formData.nombre || !formData.correo || !formData.salario) {//
      alert('Todos los campos son obligatorios');
      return;//detener el envío si falta algún campo
    }
    onSave(formData);///llamar a la función onSave con los datos del formulario
  };

  return ( 
    <div style={{border: '1px solid #ccc', padding: '15px', marginBottom: '20px'}}>
      <h3>{empleado.id ? 'Editar Empleado' : 'Nuevo Empleado'}</h3>
      <form onSubmit={handleSubmit}> 
        <div>
          <label>Nombre:</label> 
          <input  //campo de entrada para el nombre
            type="text" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            required // campo obligatorio
          />
        </div>
        <div style={{marginTop: '10px'}}>
          <label>Correo:</label>
          <input  //campo de entrada para el correo
            type="email" 
            name="correo" 
            value={formData.correo} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{marginTop: '10px'}}>
          <label>Salario:</label>
          <input  //campo de entrada para el salario
            type="number" 
            name="salario" 
            value={formData.salario} 
            onChange={handleChange} 
            step="0.01"
            required 
          />
          {/* En EmpleadoForm.js */}
<div style={{marginTop: '10px'}}>
  <label>Fecha de ingreso:</label>
  <input 
    type="date" 
    name="fechaIngreso" 
    value={formData.fechaIngreso || ''}
    onChange={handleChange} 
  />
</div>
        </div>
        <div style={{marginTop: '15px'}}>
          <button type="submit">Guardar</button>
          <button type="button" onClick={onCancel} style={{marginLeft: '10px'}}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
