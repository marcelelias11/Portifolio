import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react"
import { useNavigate, Link } from 'react-router-dom';
import './App.css'

function Sim() {
  const navigate = useNavigate();
  return (
    <>
      <div>
      </div>
      <h1>Meus Projetos</h1>
      <div className="card">
        <button onClick={() => navigate("/")}>
          TechLab(A Implementar)
        </button>
        <a href="https://notafacil.vercel.app/" target="_blank"><button>
          NotaFácil
        </button></a>
        <a href="https://comidaagora-kh77.glide.page" target="_blank"><button>
          ComidaAgora(Glide) 
        </button></a>
        <a href="https://megan5574.softr.app" target="_blank"><button>
          ComidaAgora(Softr) 
        </button></a>
        <button onClick={() => navigate("/select")}>
          Voltar
        </button>
      </div>
    </>
  )
}

export default Sim