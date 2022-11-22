import React from 'react'
import Project from '../Project/Project'
import { ImagesListType } from 'types/types'

interface ProjectsProps {
  data: ImagesListType[]
}

const Projects = ({ data }: ProjectsProps) => {
  return (
    <section className="home__works">
      {data.map((item) => (
        <Project
          key={item.id}
          image={item.image}
          alt={item.alt}
          title={item.title}
          description={item.description}
          withReadMore
        />
      ))}
    </section>
  )
}

export default Projects
