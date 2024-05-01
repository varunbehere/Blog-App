import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <div className=' w-full h-full'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App