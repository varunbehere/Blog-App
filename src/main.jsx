import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import NewBlogPage from './Components/NewBlogPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route
      path='/' element = {<App/>} >
        <Route path = '' element = {<Home/>}/>
        <Route path = '/about-us' element= {<About/>}/>
        <Route path = '/contact-us' element= {<Contact/>}/>
        <Route path = '/new-blog-page' element = {<NewBlogPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
