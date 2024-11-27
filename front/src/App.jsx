import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Componentes/Footer/Footer'
import Header from './Componentes/Header/Header'
import Seccion from './Componentes/Seccion/Seccion'
import Canchas from './Componentes/Canchas/Canchas'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Formulario from './Componentes/Formulario/Formulario'
import Tarjetaquincho from './Componentes/Tarjeta/Tarjeta'
import Eventos from './Componentes/Eventos/Eventos'
import Registro from './Componentes/Registro/Registro'
import Login from './Componentes/Login.jsx/Login'

function App() {
  return (
    <Router>
      <div className="contenedor-total">
        <Header />
        <Routes>
          <Route path="/" element={<Seccion />} />
          <Route path="/seccion" element={<Seccion />} />
          <Route path="/reservas" element={<div><Canchas /><Formulario /></div>} />
          <Route path="/eventos" element={<div><Tarjetaquincho /><Eventos /></div>} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  )
}

export default App


