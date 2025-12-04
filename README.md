# Sistema de Gestión de Empleados (SGRH) 🚀

**Proyecto:** Evidencia GA7-220501096-AA4-EV03  
**Autor / Aprendiz:** Mónica Ismelia Cañas Reyes — Ficha 2977425  
**Programa:** Tecnólogo en Análisis y Desarrollo de Software (SENA – ADSO)  

---

## 📄 Descripción  
Este proyecto es una aplicación web para la administración del personal de una empresa. Incluye:  
- Backend desarrollado con Java 17 + Spring Boot 3 + MySQL.  
- Frontend desarrollado con React.js.  
- Operaciones CRUD completas (Crear, Leer, Actualizar, Eliminar empleados).  
- Validaciones de datos, manejo de errores y persistencia con JPA/Hibernate.  

---

## 🧰 Tecnologías  

| Capa        | Tecnologías / Herramientas |
|-------------|----------------------------|
| Backend     | Java 17, Spring Boot 3, Spring Data JPA, Hibernate, MySQL, Maven |
| Frontend    | React.js, Fetch API / Axios, JSX, Hooks (useState, useEffect) |
| Requisitos  | Java 17+, Node.js 18+, MySQL Server, Maven 3.8+, Navegador Web moderno |

---

## ⚙️ Instalación y Configuración  

### 1. Clonar el repositorio  
```bash
git clone https://github.com/Monica-Ismelia/gestion-empleados--GA7-220501096-AA4-EV03.git
cd gestion-empleados--GA7-220501096-AA4-EV03
```

### 2. Configurar la base de datos (MySQL)  
- Crear la base de datos (si no existe):  
  ```sql
  CREATE DATABASE empresa;
  ```  
- En el backend, editar `src/main/resources/application.properties` con tus credenciales:  
  ```properties
  spring.datasource.url=jdbc:mysql://localhost:3306/empresa
  spring.datasource.username=TU_USUARIO
  spring.datasource.password=TU_CONTRASEÑA
  spring.jpa.hibernate.ddl-auto=update
  spring.jpa.show-sql=true
  spring.jpa.properties.hibernate.format_sql=true
  server.port=8080
  ```

### 3. Ejecutar el backend  
```bash
cd backend-origen  # o la carpeta donde está tu proyecto backend
mvn clean package
java -jar target/gestion-empleados-1.0-SNAPSHOT.jar
```

### 4. Ejecutar el frontend (React)  
```bash
cd gestion-empleados-frontend
npm install
npm start
```

- El frontend se iniciará en `http://localhost:3000`  
- El backend debe estar corriendo en `http://localhost:8080`  

---

## ✔️ Funcionalidades  

- Registrar nuevo empleado (nombre, correo, salario, fecha de ingreso)  
- Listar todos los empleados  
- Editar información de un empleado existente  
- Eliminar empleados antiguos  
- Validaciones de datos y manejo de errores  
- Comunicación cliente-servidor vía JSON / HTTP  

---

## 🧪 Pruebas realizadas  

- Pruebas de integración backend  
- Consumo de API desde el frontend  
- Validaciones de formulario y manejo de errores  
- Operaciones CRUD verificadas con datos reales  

---

## 🗂️ Estructura del Proyecto  

```
/ (root)
├── backend/                # Código backend (Spring Boot)  
├── gestion-empleados-frontend/  # Código frontend (React)  
└── README.md               # Este archivo  
```

---

## 📑 Evidencia del Proyecto  
Este proyecto corresponde a la **Evidencia GA7-220501096-AA4-EV03** del programa de formación del SENA.  

---
🖼️ Capturas de Pantalla

![alt text](image.png)  ![alt text](image-1.png)





📝 Autor

Mónica Ismelia Cañas Reyes
Evidencia :Componente front-end del proyecto formativo y proyectos de clase (listas de chequeo) 


