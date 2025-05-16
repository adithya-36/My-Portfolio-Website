import React from 'react'
import Mail from '../../assets/gmail.png'
import Phone from '../../assets/phone.png'
import Map from '../../assets/map.png'
const Contact = () => {
  return (
    <div className='min-h-screen w-full p-8 overflow-hidden'>
      <h1 className='text-center p-6'><span className='bg-gradient-to-r from-[#8c512c] to-[#610e88] bg-clip-text text-transparent text-6xl font-bold '>Get in Touch</span> </h1>
      <div className='flex p-6'>
        <div className='w-full lg:w-2/4 p-6'>
          <h1 className='mb-5'><span className='text-4xl font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>Lets's talk</span></h1>
          <p className='text-lg '>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
          <div className='flex gap-5 mt-8'>
            <img className='h-6' src={Mail}/>
            <p className='text-lg'>adithyas038@gmail.com</p>
          </div>
          <div className='flex gap-5 mt-8'>
            <img className='h-6' src={Phone}/>
            <p className='text-lg'>8590428774</p>
          </div>
          <div className='flex gap-6 mt-8'>
            <img className='h-6' src={Map}/>
            <p className='text-lg'>Kerala,India</p>
          </div>
        </div>
        <form className='flex flex-col w-full lg:w-2/4 p-6 gap-2'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name'className='h-9 p-2 rounded bg-gray-900'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' className='h-9 p-2 rounded bg-gray-900'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' className='rounded bg-gray-900 p-2'></textarea>
          <button  type='submit' className='text-left bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white font-semibold px-6 py-2 rounded mt-4 w-fit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact