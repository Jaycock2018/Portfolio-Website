import React from 'react';
import doggies from '../assets/doggies.jpg';

const Info = () => {
  return (
    <div id='info' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col md:flex-row bg-gray-300 rounded-br-full rounded-bl-full'>
      <div className='flex-1 p-4 md:p-20 md:w-2/3'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About Me</h1>
        <p className='text-center py-8'>
          Hello, I'm Jayvan Aycock, a frontend web developer with a strong foundation in management information systems. I'm passionate about creating visually stunning websites that engage and captivate audiences.
        </p>
        <p className='text-center bg-[#001b5e]/25 p-4 rounded-md'>
          While frontend development is my primary focus, I'm eager to learn more about backend development, mobile, and gaming. I'm committed to delivering exceptional results, working closely with clients to bring their vision to life with precision and artistry.
        </p>
        <p className='text-center py-8'>
          If you're looking for a dedicated frontend developer who's eager to learn and grow, I would be thrilled to work with you. Let's create something amazing together!
        </p>
        <h2 className='text-4xl font-bold text-center text-[#001b5e]'>Fun Facts</h2>
        <ul className='text-center py-8'>
          <li className='inline-block rounded-full py-2 px-4 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>JavaScript</li>
          
        </ul>
      </div>
      <div className='flex-1 p-4 md:p-10 md:w-1/3 md:text-center md:flex items-center justify-center'>
      <img
            src={doggies}
            alt='My Dogs, Emma and Ivy'
            className='hidden md:block object-contain h-full w-full md:max-w-none md:w-full transition-transform duration-300 ease-in-out hover:scale-110'
            style={{ maxWidth: "300px", width: "100%" }}
      />
      </div>
    </div>
  );
};

export default Info;