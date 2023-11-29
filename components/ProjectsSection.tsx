import React from 'react'

const ProjectsSection = () => {
  return (

    <section>
      <div className='flex flex-col items-center p-6'>

        <h1 className='text-[--text-primary] font-bold text-4xl'>
          My Projects
        </h1>

        <div className='p-8'>

          <button className='w-fit px-1 py-1 rounded-full bg-gradient-to-br from-[#ec5389] to-[#f0256c] hover:bg-[--contrast-primary] text-[--text-primary] mr-4'>

            <span className='block bg-[--bg-primary] hover:bg-gradient-to-br from-[#ec5389] to-[#f0256c] rounded-full px-4 py-2'>
              All
            </span>

          </button>

          <button className='w-fit px-1 py-1 rounded-full bg-gradient-to-br from-[#ec5389] to-[#f0256c] hover:bg-[--contrast-primary] text-[--text-primary] mr-4'>

            <span className='block bg-[--bg-primary] hover:bg-gradient-to-br from-[#ec5389] to-[#f0256c] rounded-full px-4 py-2'>
              Web
            </span>

          </button>

          <button className='w-fit px-1 py-1 rounded-full bg-gradient-to-br from-[#ec5389] to-[#f0256c] hover:bg-[--contrast-primary] text-[--text-primary]'>

            <span className='block bg-[--bg-primary] hover:bg-gradient-to-br from-[#ec5389] to-[#f0256c] rounded-full px-4 py-2'>
              Mobile
            </span>

          </button>
        </div>

      </div>
    </section>

  )
}

export default ProjectsSection