import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/github.png'

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImg,
      title: 'React',
      style: 'shadow-green-500'
    },
    {
      id: 5,
      src: node,
      title: 'Node',
      style: 'shadow-red-500'
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-purple-500'
    },
    {
      id: 7,
      src: git,
      title: 'GitHub',
      style: 'shadow-gray-500'
    },
  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-12 sm:px-0'>
          {
            tech.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt={title} className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience
