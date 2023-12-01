import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (

    <div>

      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>

        {/* Overlay */}
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl'>

          {/* Icons */}
          <div className='p-1'>
            <Link
              href={gitUrl}
              target='_blank'
              className='p-3 flex items-center justify-center h-14 w-14 border-2 relative rounded-full border-[--text-secondary] hover:border-[--text-primary] text-[--text-secondary] hover:text-[--text-primary] cursor-pointer'>
              <CodeBracketIcon className='h-10 w-10' />
            </Link>
          </div>

          <div className='p-1'>
            <Link
              href={previewUrl}
              target='_blank'
              className='p-3 flex items-center justify-center h-14 w-14 border-2 relative rounded-full border-[--text-secondary] hover:border-[--text-primary] text-[--text-secondary] hover:text-[--text-primary] cursor-pointer'>
              <EyeIcon className='h-10 w-10' />
            </Link>
          </div>

        </div>

      </div>

      <div
        className='text-[--text-primary] rounded-b-xl bg-[--bg-secondary] py-4 px-4'>

        <h5
          className='font-semibold text-lg text-[--text-primary] mb-2'>
          {title}
        </h5>

        <p
          className='text-[--text-secondary]'>
          {description}
        </p>

      </div>

    </div>

  )
}

export default ProjectCard