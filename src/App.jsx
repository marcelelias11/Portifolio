import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Login from './components/login';
import Select from './components/select';
import Calc from './components/calc';
import CalcResult from './components/calcresult';
import Sim from './components/sim';
import WaveSim from './components/wavesim';
import WaveResult from "./components/waveresult";
import WellSim from "./components/wellsim";
import WellResult from "./components/wellresult";
import Cadastro from "./components/cadastro";
import PreCalc from "./components/precalc";
import Load from "./components/carregar";
import Delete from "./components/delete";
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Select/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/select" element={<Select/>}/>
          <Route path="/calculator" element={<Calc/>}/>
          <Route path="/calcresult" element={<CalcResult/>}/>
          <Route path="/simulator" element={<Sim/>}/>
          <Route path="/wavesim" element={<WaveSim/>}/>
          <Route path="/waveresult" element={<WaveResult/>}/>
          <Route path="/wellsim" element={<WellSim/>}/>
          <Route path="/wellresult" element={<WellResult/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/precalc" element={<PreCalc/>}/>
          <Route path="/carregar" element={<Load/>}/>
          <Route path="/deletar" element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
