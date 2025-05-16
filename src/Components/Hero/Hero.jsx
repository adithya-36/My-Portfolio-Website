import React from 'react'
import profile from '../../assets/profile.jpg'
const Hero = () => {
  return (
    <div className='min-h-screen w-full flex  flex-col items-center justify-center'>
      <img className='h-48 w-48 rounded-full m-10' src={profile} />
      <h1 className='font-bold text-4xl text-center'> <span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent '>I'm Adithya Shaji,</span> frontend developer</h1>
      <p className='mt-6 text-center'>I am an IT engineering student at School of Engineering CUSAT, Ernakulam</p>
      <div className='flex items-center gap-8 p-6'>
        <div className='text-sm m-8 p-4 w-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-pink-400 hover:to-purple-400 cursor-pointer text-center transition-all duration-300'>Connect With Me</div>
        <div className='text-sm m-8 p-4 w-64 border-2 border-white rounded-full cursor-pointer hover:bg-gray-400 hover:text-black text-center transition-all duration-200'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero