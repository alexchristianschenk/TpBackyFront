import { API_URL } from '../../config';
import React, { useState, useEffect } from 'react';
import './Formulario.css'; 
import { Link } from 'react-router-dom';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    dia: '',
    horario: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  // Cargar turnos activos desde el backend
  useEffect(() => {
    const obtenerTurnos = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSubmittedData(data); // Actualizar estado con los turnos activos
      } catch (error) {
        console.error('Error al obtener turnos:', error);
      }
    };

    obtenerTurnos();
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Enviar turno al backend
  const enviarDatosBackend = async (nuevoTurno) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoTurno),
      });
      if (!response.ok) {
        throw new Error('Error al guardar el turno en el backend');
      }
      const datos = await response.json();
      setSubmittedData((prevData) => [...prevData, datos]); // Actualizar la lista local
      console.log('Turno creado en el backend:', datos);
    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
      alert('Hubo un error al guardar el turno. Intente de nuevo.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación campos completos
    if (!formData.nombre || !formData.dia || !formData.horario) {
      alert('Por favor, complete todos los campos antes de enviar.');
      return;
    }

    // Crear objeto para enviar al backend
    const nuevoTurno = {
      nombre: formData.nombre,
      dia: formData.dia,
      hora: formData.horario,
    };

    // Enviar datos al backend
    await enviarDatosBackend(nuevoTurno);

    // Limpiar formulario
    setFormData({ nombre: '', dia: '', horario: '' });
    alert('Turno creado con éxito');
  };

  // Desactivar un turno (borrado lógico)
  const desactivarTurno = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const data = await response.json();
        setSubmittedData((prevData) => prevData.filter((turno) => turno._id !== id));
        alert('El turno ha sido desactivado correctamente');
        console.log('Turno desactivado:', data);
      } else {
        alert('No se pudo desactivar el turno.');
      }
    } catch (error) {
      console.error('Error al desactivar el turno:', error);
      alert('Hubo un error al intentar desactivar el turno.');
    }
  };

  return (
    <div className="container">
      {<Link to="/reservas" />}
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label className="label">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Día:</label>
          <input
            type="date"
            name="dia"
            value={formData.dia}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Horario:</label>
          <input
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">Reservar</button>
      </form>

      <div className="dataContainer">
        <h3 className="heading">Datos Ingresados</h3>
        {submittedData.map((data) => (
          <div key={data._id} className="dataItem">
            <p className="dataText">Nombre: {data.nombre}</p>
            <p className="dataText">Día: {data.dia}</p>
            <p className="dataText">Horario: {data.hora}</p>
            <button 
              className="deleteButton" 
              onClick={() => desactivarTurno(data._id)}>
              Desactivar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formulario;
