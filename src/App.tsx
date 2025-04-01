import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/web/layout/NavBar';
import Home from './components/Home';
import About from './components/web/layout/About';
import Services from './components/web/services/Services';
import Experiencia from './components/web/layout/Experiencia';
import Rodape from './components/web/layout/Rodape';
function App() {

  return (
    <div className='bg-[w-] w-full'>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/exeperiencia' element={<Experiencia />}></Route>
          </Routes>
        </div>
        <Rodape />
      </Router>

    </div>
  )
}

export default App
