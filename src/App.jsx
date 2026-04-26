import React from 'react'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/upload' element={<Upload/>}/>
          <Route path='/dashboard' element={ <Dashboard/>}/>
      </Routes>
     
    </div>
  )
}

export default App