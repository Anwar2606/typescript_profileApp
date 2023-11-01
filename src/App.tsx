import React from 'react'

import {  Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Skill from './pages/Skill/Skill'
import Content from './pages/content/Content'
import Navbar from './pages/Navbar/Navbar'
export default function App() {
  return (
    <div>
      
    
      <div>
     
        <Routes>
            <Route  path='/' element={<Content/>}>
        
        </Route>
        <Route  path='/nav' element={<Navbar/>}></Route>
        <Route path='about' element={<About/>}>
        </Route>
        <Route  path='/skill' element={<Skill/>}>
         </Route>
           
       
        
        </Routes>
     
      </div>
    </div>
  )
}
