import React from 'react';
import doggies from '../assets/doggies.jpg';

const Info = () => {
  return (
    <div id='info' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col md:flex-row bg-gray-300 rounded-br-full rounded-bl-full'>
      <div className='flex-1 p-4 md:p-20 md:w-2/3'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About Me</h1>
        <p className='text-center py-8'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, saepe
          voluptas expedita cumque itaque, accusantium provident ad tempora
          obcaecati, laudantium quis nobis. Corporis iusto fugiat magni esse
          sapiente dolor ratione!
        </p>
        <h2 className='text-4xl font-bold text-center text-[#001b5e]'>Skills</h2>
        <ul className='text-center py-8'>
          <li className='inline-block rounded-full py-2 px-4 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>JavaScript</li>
          <li className='inline-block rounded-full py-2 px-4 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>React</li>
          <li className='inline-block rounded-full py-2 px-4 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>CSS</li>
          <li className='inline-block rounded-full py-2 px-4 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>HTML</li>
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