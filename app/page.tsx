'use client'
import React from 'react'
import { Icon } from '@iconify/react-with-api'

const technologies = [
  {
    name: 'React',
    icon: 'logos:react',
    url: 'https://reactjs.org/'
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    url: 'https://www.typescriptlang.org/'
  },
  {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
    url: 'https://tailwindcss.com/'
  },
  {
    name: 'Python',
    icon: 'logos:python',
    url: 'https://www.python.org/'
  },
  {
    name: 'FastAPI',
    icon: 'devicon:fastapi',
    url: 'https://fastapi.tiangolo.com/'
  },
  {
    name: 'GraphQL',
    icon: 'logos:graphql',
    url: 'https://graphql.org/'
  },
  {
    name: 'Google App Engine',
    icon: 'logos:google-cloud',
    url: 'https://cloud.google.com/appengine'
  },
  {
    name: 'BigQuery',
    icon: 'tabler:brand-google-big-query',
    url: 'https://cloud.google.com/bigquery'
  },
  {
    name: 'Next.js',
    icon: 'teenyicons:nextjs-outline',
    url: 'https://nextjs.org/'
  },
  {
    name: 'Tableau',
    icon: 'logos:tableau-icon',
    url: 'https://www.tableau.com'
  },
  {
    name: 'dbt',
    icon: 'logos:dbt',
    url: 'https://www.getdbt.com/'
  },
  {
    name: 'GitHub',
    icon: 'raphael:github',
    url: 'https://github.com/stephenjera'
  },
]

const HomePage: React.FC = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Technologies Used</h1>
      <ul className='grid grid-cols-3 gap-4'>
        {technologies.map(tech => (
          <li key={tech.name} className='flex flex-col items-center'>
            <a href={tech.url} target='_blank' rel='noopener noreferrer'>
              <Icon icon={tech.icon} width={64} height={64} />
            </a>
            <p className='mt-2 text-center'>{tech.name}</p>
          </li>
        ))}
      </ul>
      <div className='mt-8 p-4 bg-gray-700 rounded-md shadow-md'>
        <h2 className='text-lg font-bold mb-2 text-center'>About this project</h2>
        <p className='text-center'>This project showcases the technologies used to build a modern web application. I
          wanted to learn new technologies and challenge myself to create something engaging and
          useful. By using React, TypeScript, and Tailwind CSS, I was able to build a responsive
          and user-friendly interface that makes it easy to explore and interact with the data.</p>
      </div>
    </div>
  )
}

export default HomePage
