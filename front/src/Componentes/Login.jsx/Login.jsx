import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate(); // Para redirigir al usuario después de iniciar sesión

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de los campos
        if (!formData.email || !formData.password) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        try {
            // Enviar los datos al backend para iniciar sesión
            const response = await fetch('http://localhost:5000/api/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }

            const data = await response.json();
            console.log(data); // Respuesta del backend

            // Si todo va bien, redirigir al usuario a otra página (por ejemplo, al dashboard)
            alert('Inicio de sesión exitoso');
            navigate('/dashboard'); // Cambia la ruta de redirección según lo que necesites
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Hubo un error al iniciar sesión. Intenta de nuevo.');
        }
    };

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            <form className="login-form" onSubmit={handleSubmit}>
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
                        placeholder="Ingresa tu contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="button">Iniciar sesión</button>
            </form>
            <div className="registro-link">
                <p>¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a></p>
            </div>
        </div>
    );
}

export default Login;

