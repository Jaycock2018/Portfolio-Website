import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import background from '../assets/background-pic.jpg'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src={background} alt="Background picture" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Jayvan Aycock</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
            <TypeAnimation
            sequence={[
            'Developer', 
            2000, 
            'Coder', 
            2000, 
            'Designer',
            2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
            />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
              <a href="https://twitter.com/Keenannnn_12">
                <FaTwitter className='cursor-pointer' size={20} />
              </a>
              <a href="https://www.instagram.com/jayvanaycock/">
                <FaInstagram className='cursor-pointer' size={20} />
              </a>
              <a href="https://github.com/jaycock2018">
                <FaGithub className='cursor-pointer' size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jayvanaycock/">
                <FaLinkedinIn className='cursor-pointer' size={20} />
              </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main