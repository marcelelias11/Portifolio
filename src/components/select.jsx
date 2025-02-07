import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom';
import './App.css'

function Select() {
  const navigate = useNavigate();

  return (
    <>
      <div>
      </div>
      <h1>Marcelo Elias de Araújo Júnior</h1>
      <div className="card">
      <button onClick={() => navigate("/precalc")}>
          Quem sou eu
        </button>
        <button onClick={() => navigate("/simulator")}>
          Meus projetos
        </button>
      </div>
    </>
  )
}

export default Select