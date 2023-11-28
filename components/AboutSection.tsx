import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-[--text-primary]'>

      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>

        <div className='relative'>
          <Image
            src={"/about-me.gif"}
            alt='About Me GIF'
            className='w-[300px] h-[160px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={250}
            height={250}
          />

          <Image
            src={"/tv.png"}
            alt='TV Png'
            className='w-[300px] h-[180px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={250}
            height={250}
          />
        </div>

        <div>
          <h2
            className='text-4xl font-bold text-[--text-primary] mb-4'>
            About Me
          </h2>

          <p>
            I'm obssessed with art and creating things.
          </p>
        </div>

      </div>

    </section>
  )
}

export default AboutSection 