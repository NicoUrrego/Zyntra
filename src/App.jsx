import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container mt-5">
      <h1 className="text-primary text-center">
        Mi aplicación React
      </h1>

      <div className="card mt-4 shadow">
        <div className="card-body">
          <h5 className="card-title">Hola Bootstrap</h5>

          <p className="card-text">
            Este proyecto utiliza React, Vite y Bootstrap.
          </p>

          <button className="btn btn-primary">
            Comenzar
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
