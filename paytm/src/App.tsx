import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './components/Homepage';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Homepage/>} />
          {/* <Route path='/movie' element={</>} />
          <Route path="/" element={</>} />
          <Route path="/reports" element={</>} />
          <Route path="/users" element={</>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
