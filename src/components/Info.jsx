import React from 'react';

const Info = () => {
  return (
    <div id='info' className='max-w-[1040px] m-auto mt-20 md:pl-20 p-4 py-16 bg-slate-400 rounded-full flex'>
      <div className='flex-1 p-20'>
        <h1 className='text-4xl font-bold text-[#001b5e]'>About Me</h1>
        <p className='py-8'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, saepe
          voluptas expedita cumque itaque, accusantium provident ad tempora
          obcaecati, laudantium quis nobis. Corporis iusto fugiat magni esse
          sapiente dolor ratione!
        </p>
        <h2 className='text-2xl font-bold text-[#001b5e]'>Skills</h2>
          <ul className='list-disc pl-6'>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
      </div>
      <div className='flex-1 p-10'>
      <img
  src='/doggies.jpg'
  alt='My Dogs, Emma and Ivy'
  className='object-contain h-full w-full rounded-xl transition-transform duration-300 ease-in-out hover:scale-110'
/>

      </div>
    </div>
  );
};

export default Info;
