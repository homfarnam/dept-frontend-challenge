import Project from '../Project/Project'
import type { ProductsType } from 'types/types'

interface ProjectsProps {
  data: ProductsType[] | undefined
}

const Projects = ({ data }: ProjectsProps) => {
  return (
    <>
      {data ? (
        <section className="home__works">
          {data.map((item) => (
            <Project
              key={item.id}
              image={item.image}
              alt={item.title}
              title={item.category}
              description={item.description}
              withReadMore
            />
          ))}
        </section>
      ) : null}
    </>
  )
}

export default Projects
