import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'




const HomePage = () => {
  return (
    <div className='homePage'>
      
       <div className='left'>
        <h1>LAMA AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore sunt nisi nostrum autem adipisci asperiores ad? Velit earum, recusandae distinctio, ratione eius nam voluptas quae officia nostrum omnis aperiam hic.s</h3>
        <Link to='/dashboard'>Getting Started</Link>
       </div>

       <div className='right'>
          <div className='container'>
            <img src="https://img.freepik.com/free-photo/black-friday-sale-banner-template-astronaut-working-laptop_460848-6339.jpg?semt=ais_hybrid" alt="" className='botImage'/>
          </div>
       </div>
    </div>
  )
}

export default HomePage