import React from 'react'
import arrow from '../../assets/right-arrow.png'
const Projects = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center px-4 py-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-12'>My Projects</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className='border-2 rounded-md p-6 cursor-pointer hover:bg-slate-950  transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
          <h1 className='text-2xl'>01</h1>
          <h2><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent text-3xl font-bold'>Project A</span></h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem aperiam veniam eos accusamus aut libero quasi doloremque neque culpa sint, quos quae adipisci est dolor numquam vitae reiciendis nemo.</p>
          <img className='w-8 transition-all duration-300 transform hover:scale-125 hover:shadow-xl cursor-pointer' src={arrow} alt="" />
        </div>
        <div className='border-2 rounded-md p-6 cursor-pointer hover:bg-slate-950  transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
          <h1 className='text-2xl'>01</h1>
          <h2><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent text-3xl font-bold'>Project A</span></h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem aperiam veniam eos accusamus aut libero quasi doloremque neque culpa sint, quos quae adipisci est dolor numquam vitae reiciendis nemo.</p>
          <img className='w-8 transition-all duration-300 transform hover:scale-125 hover:shadow-xl cursor-pointer' src={arrow} alt="" />
        </div>
        <div className='border-2 rounded-md p-6 cursor-pointer hover:bg-slate-950  transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
          <h1 className='text-2xl'>01</h1>
          <h2><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent text-3xl font-bold'>Project A</span></h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem aperiam veniam eos accusamus aut libero quasi doloremque neque culpa sint, quos quae adipisci est dolor numquam vitae reiciendis nemo.</p>
          <img className='w-8 transition-all duration-300 transform hover:scale-125 hover:shadow-xl cursor-pointer' src={arrow} alt="" />
        </div>
        <div className='border-2 rounded-md p-6 cursor-pointer hover:bg-slate-950  transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
          <h1 className='text-2xl'>01</h1>
          <h2><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent text-3xl font-bold'>Project A</span></h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem aperiam veniam eos accusamus aut libero quasi doloremque neque culpa sint, quos quae adipisci est dolor numquam vitae reiciendis nemo.</p>
          <img className='w-8 transition-all duration-300 transform hover:scale-125 hover:shadow-xl cursor-pointer' src={arrow} alt="" />
        </div>
        <div className='border-2 rounded-md p-6 cursor-pointer hover:bg-slate-950  transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
          <h1 className='text-2xl'>01</h1>
          <h2><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent text-3xl font-bold'>Project A</span></h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem aperiam veniam eos accusamus aut libero quasi doloremque neque culpa sint, quos quae adipisci est dolor numquam vitae reiciendis nemo.</p>
          <img className='w-8 transition-all duration-300 transform hover:scale-125 hover:shadow-xl cursor-pointer' src={arrow} alt="" />
        </div>
        <div className='border-2 rounded-md p-6 cursor-pointer hover:bg-slate-950  transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
          <h1 className='text-2xl'>01</h1>
          <h2><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent text-3xl font-bold'>Project A</span></h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem aperiam veniam eos accusamus aut libero quasi doloremque neque culpa sint, quos quae adipisci est dolor numquam vitae reiciendis nemo.</p>
          <img className='w-8 transition-all duration-300 transform hover:scale-125 hover:shadow-xl cursor-pointer' src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Projects