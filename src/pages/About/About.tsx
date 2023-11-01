import React from 'react'
import './about.css'

import Image from '../../assets/Newprofile2.jpg'
import Navbar from '../Navbar/Navbar'
export default function About() {
  return (
    <div  style={{backgroundColor:"black",height:"50.2rem"}}>
       <div >
        <div>
        <div>
          <Navbar/>
       </div>
       <div className='about'>
        <div className='main'>
          <img src={Image}/>
          <div className='about-text'>
            <h1>About me</h1>
            <h5><span>Web Developer</span></h5>
            <p>I am pursuing Bachelor of Computer Application,Sivakasi.I am a front-end and back-end web developer.I can provide 
              Clean code and perfect design.I also make the website more interactive with web animations.I believe in creating websites that not only look 
              stunning but also provide exceptional user experiences. My goal is to make the web a better place by crafting digital solutions that are accessible, 
              fast, and user-centered. I'm also a firm advocate of clean code, optimization, and the use of modern development methodologies.
            </p>
            
          </div>
        </div>
       </div>
       </div>
    </div>
    </div>
  )
}
