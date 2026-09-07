import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Navbar from "./componentes/Navbar";
import Personalidad from './componentes/Personalidad'
import Logotipo from './componentes/Logotipo'
import Usos from './componentes/Usos'
import Colores from './componentes/Colores'
import Tipografia from './componentes/Tipografia'
import Fotografia from './componentes/Fotografia';
function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Personalidad />
      <Logotipo />
      <Usos />
      <Colores />
      <Tipografia />
      <Fotografia  />
    </>
  )
}

export default App
