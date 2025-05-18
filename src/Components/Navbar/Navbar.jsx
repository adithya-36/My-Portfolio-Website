import React from 'react'
import logo from '../../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between m-4'>
      <img className='h-12' src={logo}/>
      <ul className='flex items-center gap-16 text-sm cursor-pointer'>
        <NavLink className={(e)=>{return e.isActive?"text-purple-600":"text-white"}} to="/"><li>Home</li></NavLink>  
        <NavLink className={(e)=>{return e.isActive?"text-purple-600":"text-white"}} to="/about"><li>About</li></NavLink>  
        <NavLink className={(e)=>{return e.isActive?"text-purple-600":"text-white"}} to="/projects"><li>Project</li></NavLink>  
        <NavLink className={(e)=>{return e.isActive?"text-purple-600":"text-white"}} to="/contact"><li>Contact</li></NavLink>  
      </ul>
      <div className='text-sm m- p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-pink-400 hover:to-purple-400 cursor-pointer'>Connect With Me</div>
    </div>
  )
}

export default Navbar