# Delta Sports

Este proyecto es una aplicación web para pedir turnos en una Cancha de padel, desarrollada utilizando React para el frontend y Node.js con Express para el backend. En la aplicación se puede crear y eliminar turnos en la base de datos, y también se puede modificar los datos del usuario (update by id) una vez uno a iniciado sesión, utilizando MongoDB Atlas como base de datos.

## Tecnologías Utilizadas

- **Frontend**: React, React Router, CSS
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB Atlas, Mongoose

## Estructura del Proyecto

- **Frontend**: Código fuente en el directorio `front/`
- **Backend**: Código fuente en el directorio `backend/`

## Instalación

### Backend

1. Navega al directorio `backend/`.

    cd backend

2. Instala las dependencias del backend.

    npm install

3. Configura las variables de entorno. Crea un archivo `.env` en el directorio `backend/` y agrega la siguiente línea:

    MONGODB_URI=mongodb+srv://padelU:Palermo2025@cluster0.ztnwx.mongodb.net/padelDB?retryWrites=true&w=majority
    (base de datos en mongodb atlas)

4. Inicia el servidor del backend.

    npm start


### Frontend

1. Navega al directorio `front/`.

    cd delta_sports_front

2. Instala las dependencias del frontend.

    npm install

3. Inicia el servidor de desarrollo del frontend.

    npm run dev

## Funcionalidades

- **Lista de Turnos**: Visualiza todos los turnos activos.
- **Crear Turno**: Añade un nuevo turno a la base de datos.
- **Eliminar Turno**: Desactiva un turno de la base de datos.
- **Crear Usuario**: Añade un nuevo usuario a la base de datos.
- **Iniciar sesión de Usuario**: Inicia sesión de usuario confirmando con la base de datos.
- **Cerrar sesión de Usuario**: Cierra sesión de usuario confirmando con la base de datos.
- **Editar Usuario**: Modifica los detalles de un usuario existente.

## Endpoints del API

- `GET /api/turnos` - Obtiene todos los turnos.
- `DELETE /api/turnos/:id` - Desactiva un turno por ID.(Borrado lógico)
- `POST /api/turnos` - Crea un nuevo turno.
- `POST /api/usuarios/registro` - Crea un nuevo usuario.
- `GET /api/usuarios/header` - Cierra sesión de la cuenta en uso con un botón en el
header.
- `POST /api/usuarios/login` - Inicia sesión de un usuario existente.
- `GET /api/usuarios/protegida` - Visualización de una vista solo permitida para alguien logeado.
