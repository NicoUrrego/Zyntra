import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Navbar from "./componentes/Navbar";
import Personalidad from './componentes/Personalidad'
import Logotipo from './componentes/Logotipo'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Personalidad />
      <Logotipo />
    </>
  )
}

export default App
