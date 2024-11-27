import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

function Registro() {
    const [formData, setFormData] = useState({
        jugador: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate(); // Para redirigir al login después del registro

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de los campos
        if (!formData.jugador || !formData.email || !formData.password) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        try {
            // Enviar los datos al backend
            const response = await fetch('http://localhost:5000/api/usuarios/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error al registrar el usuario');
            }

            const data = await response.json();
            console.log(data); // Respuesta del backend

            // Si todo va bien, redirigir al login
            alert('Registro exitoso, por favor inicie sesión');
            navigate('/login');
        } catch (error) {
            console.error('Error al registrar:', error);
            alert('Hubo un error al registrar el usuario. Intenta de nuevo.');
        }
    };

    return (
        <div className="registro-container">
            <h1>Registro</h1>
            <form className="registro-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="jugador">Jugador:</label>
                    <input
                        type="text"
                        id="jugador"
                        name="jugador"
                        placeholder="Ingresa tu nombre de usuario"
                        value={formData.jugador}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ingresa tu correo"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Crea una contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="button">
                    Registrarse
                </button>
            </form>
            <div className="login-link">
                <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
            </div>
        </div>
    );
}

export default Registro;


