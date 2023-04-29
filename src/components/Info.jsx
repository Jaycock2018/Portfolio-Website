import React from 'react';

const Info = () => {
  return (
    <div id='info' className='max-w-[1040px] m-auto pr-12 p-4 py-16 md:flex md:justify-center md:pl-20 bg-gray-300 rounded-br-full rounded-bl-full'>
      <div className='flex-1 p-10 md:p-20 md:w-2/3 '>
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
        <h2 className='text-4xl font-bold text-center text-[#001b5e]'>Skills</h2>
        <ul className='text-center py-8'>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            JavaScript
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            React.js
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            HTML & CSS
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            Tailwind CSS
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            Node.js
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            Git
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            C#
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            Microsft SQL Server
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            Vite
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            Bootstrap
          </li>
          <li className='inline-block rounded-full py-2 px-4 m-1 bg-gray-200 text-gray-800 hover:bg-[#001b5e] hover:text-white transition duration-300 ease-in-out'>
            Microsoft Azure
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;