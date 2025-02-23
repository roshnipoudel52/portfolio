import React from 'react'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Experience from './Experience'
import Contact from './Contact'

export default function Index() {
  return (
    <div>
           <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/> 
    </div>
  )
}
