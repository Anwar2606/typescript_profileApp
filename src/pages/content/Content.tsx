import React from 'react'
import './content.css'
import back from '../../assets/profile3-removebg-preview.png'
import colorBack from '../../assets/colorBackground.png'

import Navbar from '../Navbar/Navbar'
export default function Content() {
  return ( 
    <div style={{backgroundColor:"black",height:"50.2rem"}}>
      <div>
        <Navbar/>
      </div> 
    <div className='detail'>
      <h1>Hi,I am<span> MD Anwar</span></h1>
      <p>I am pursuing Bachelor of Computer Application and <br/><br/>I become a Web developer</p>
    </div>
      <div className='images'>
         <img src={colorBack} height={600} width={700} className='image1'/>
          <img src={back} height={600} width={700} className='image2'/>
        </div>
    </div>
  )
}
