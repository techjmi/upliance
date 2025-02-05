import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import TextEditor from './component/TextEditor'
import Navbar from './component/Navbar'
import { Route, Router, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>

    <Route path='/' element={<Counter/>} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    <Footer />
    {/* <Counter /> */}
   
    </>
  )
}

export default App
