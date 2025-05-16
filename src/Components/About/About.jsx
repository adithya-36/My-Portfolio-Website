import React from 'react'
import profile from '../../assets/profile.jpg'
import about from '../../assets/aboutme.png'
const About = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center px-4 py-8 bg-black text-white'>
      <div className='w-32 mb-8'>
        <img src={about} alt="" />
      </div>
      <div className='flex flex-col lg:flex-row w-full max-w-6xl px-6 gap-12'>
        <div className='flex-shrink-0 flex justify-center'>
          <img className='h-64 w-48 object-cover ' src={profile}/>
        </div>
        <div className='flex flex-col flex-1 '>
          <div className='mb-8'>
            <p className='mb-4'>I’m a dedicated web developer with a strong foundation in HTML, CSS, JavaScript, and React. I thrive on creating responsive, user-friendly websites that combine functionality with stunning design. My passion for coding drives me to deliver seamless digital experiences that meet modern standards and exceed expectations.</p>
            <p>With a keen eye for detail, I focus on writing clean, efficient code to build dynamic online solutions. I stay updated on the latest tech trends to ensure my projects are innovative. Whether it’s a small webpage or a complex app, I’m committed to transforming ideas into impactful digital realities.</p>
          </div>
          <div className='p-4'>
            <div className='flex items-center gap-4 group'>
              <span className='w-24 text-left'>HTML & CSS</span>
              <hr 
                className='bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-1 w-56 border-none transition-all duration-500 ease-in-out group-hover:w-64' 
              />
            </div>
            <div className='flex items-center gap-4 mt-2 group'>
              <span className='w-24 text-left'>React JS</span>
              <hr 
                className='bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-1 w-80 border-none transition-all duration-500 ease-in-out group-hover:w-96' 
              />
            </div>
            <div className='text-white flex items-center gap-4 mt-2 group'>
              <span className='w-24 text-left'>JavaScript</span>
              <hr 
                className='bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-1 w-64 border-none transition-all duration-500 ease-in-out group-hover:w-72' 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About