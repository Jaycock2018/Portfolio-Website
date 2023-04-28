import React from 'react'
import ProjectItem from './ProjectItem'
import airbnb from '../assets/airbnb.jpg'
import cooking from '../assets/cooking.webp'
import fitness from '../assets/fitness.jpg'
import game from '../assets/game.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, saepe voluptas expedita cumque itaque, 
            accusantium provident ad tempora obcaecati, laudantium quis nobis. Corporis iusto fugiat magni esse sapiente dolor ratione!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={airbnb} title='AirBnb App' />
            <ProjectItem img={cooking} title='Cooking App' />
            <ProjectItem img={fitness} title='Fitness App' />
            <ProjectItem img={game} title='Game App' />
        </div>
    </div>
  )
}

export default Projects