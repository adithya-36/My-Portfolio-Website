import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {path:"/",element:<><Navbar/><Hero/></>},
    {path:"/about",element:<><Navbar/><About/></>},
    {path:"/projects",element:<><Navbar/><Projects/></>},
    {path:"/contact",element:<><Navbar/><Contact/></>}
  ])
  return (
    <div>
      
      <RouterProvider router={router}/>
    </div>
  )
}

export default App