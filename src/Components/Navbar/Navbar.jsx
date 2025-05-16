import React from 'react'
import logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between m-4'>
      <img className='h-12' src={logo}/>
      <ul className='flex items-center gap-8 text-sm cursor-pointer'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className='text-sm m- p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-pink-400 hover:to-purple-400 cursor-pointer'>Connect With Me</div>
    </div>
  )
}

export default Navbar