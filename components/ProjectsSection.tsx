import React from 'react'
import ProjectCard from "./ProjectCard"


const projectsData = [

  {
    id: 1,
    title: "Project 1",
    description: "Project 1 Desc",
    image: "/images/projects/project01.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osakareaper",
    previewUrl: "/",
  },

  {
    id: 2,
    title: "Project 2",
    description: "Project 2 Desc",
    image: "/images/projects/project02.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osakareaper",
    previewUrl: "/",
  },

  {
    id: 3,
    title: "Project 3",
    description: "Project 3 Desc",
    image: "/images/projects/project03.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/osakareaper",
    previewUrl: "/",
  },

  {
    id: 4,
    title: "Project 4",
    description: "Project 4 Desc",
    image: "/images/projects/project04.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/osakareaper",
    previewUrl: "/",
  },

  {
    id: 5,
    title: "Project 5",
    description: "Project 5 Desc",
    image: "/images/projects/project05.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osakareaper",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "Project 6",
    description: "Project 6 Desc",
    image: "/images/projects/project06.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osakareaper",
    previewUrl: "/",
  },

]

const ProjectsSection = () => {
  return (

    <section>
      <div className='flex flex-col items-center p-6'>

        <h2 className='text-[--text-primary] font-bold text-4xl'>
          My Projects
        </h2>

        {/* Botoẽs */}
        <div className='pt-8 pb-6'>


          <button className='mb-2 sm:mb-0 w-full sm:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-[#ec5389] to-[#f0256c] hover:bg-[--contrast-primary] text-[--text-primary] mr-4'>

            <span className='block bg-[--bg-primary] hover:bg-gradient-to-br from-[#ec5389] to-[#f0256c] rounded-full px-4 py-2'>
              All
            </span>

          </button>

          <button className='mb-2 sm:mb-0 w-full sm:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-[#ec5389] to-[#f0256c] hover:bg-[--contrast-primary] text-[--text-primary] mr-4'>

            <span className='block bg-[--bg-primary] hover:bg-gradient-to-br from-[#ec5389] to-[#f0256c] rounded-full px-4 py-2'>
              Web
            </span>

          </button>

          <button className='w-full sm:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-[#ec5389] to-[#f0256c] hover:bg-[--contrast-primary] text-[--text-primary]'>

            <span className='block bg-[--bg-primary] hover:bg-gradient-to-br from-[#ec5389] to-[#f0256c] rounded-full px-4 py-2'>
              Mobile
            </span>

          </button>



        </div>

      </div>

      <div>

        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>

      </div>

    </section>

  )
}

export default ProjectsSection