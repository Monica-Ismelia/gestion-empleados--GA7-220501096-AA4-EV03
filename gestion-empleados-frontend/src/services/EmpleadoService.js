const API_URL = 'http://localhost:8080/api/empleados'; // URL base de la API

export const EmpleadoService = { //objeto con métodos para interactuar con la API
  // GET: Listar todos
  listar: () => fetch(API_URL).then(res => { //hacer una solicitud GET a la URL de la API
    if (!res.ok) throw new Error('Error al listar');
    return res.json();
  }),

  // POST: Crear nuevo empleado
  crear: (empleado) => fetch(API_URL, { //hacer una solicitud POST a la URL de la API
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(empleado)
  }).then(res => {
    if (!res.ok) throw new Error('Error al crear');
    return res.json();
  }),

  // PUT: Actualizar los datos de un empleado
  actualizar: (id, empleado) => fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(empleado)
  }).then(res => {
    if (!res.ok) throw new Error('Error al actualizar');
    return res.json();
  }),

  // DELETE: Eliminar un empleado
 eliminar: (id) => fetch(`${API_URL}/${id}`, {
  method: 'DELETE'
}).then(res => {
  if (!res.ok) throw new Error('Error al eliminar');
})

};