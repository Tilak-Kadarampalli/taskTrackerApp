import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
)

export default App