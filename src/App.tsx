import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Seasons from './pages/Seasons/Seasons'
import Episodes from './pages/Episodes/Episodes'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/characters" element={<Home />} />
          <Route path="/plot" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
