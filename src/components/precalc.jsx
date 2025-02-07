import { useNavigate } from 'react-router-dom';
import './App.css'

function PreCalc() {
  const navigate = useNavigate();
  return (
    <>
      <div>
      </div>
      <h1>Sobre mim</h1>
      <div className="card">
        <p>Olá, me chamo Marcelo Elias de Araújo Júnior. Sou um dev com experiência em Front-End 
          (HTML, CSS, JavaScript, React, React Native), Back-End (Node.js, Express.js, C#, Python, Flask),
          Banco de Dados SQL, linguagens mais esotéricas como Assembly, e outros. Tenho um grande interesse também por matemática
          e raciocíno lógico.</p>
        <button onClick={() => navigate("/select")}>
          Voltar
        </button>
      </div>
    </>
  )
}

export default PreCalc