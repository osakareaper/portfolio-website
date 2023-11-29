"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (

    <section>

      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Grid que divide a hero section */}

        <div className="col-span-7 place-self-center text-center">
          {/* 7 span of 12 for first section*/}

          <h1 className='text-[--text-primary] mb-4 text-4xl lg:text-5xl font-extrabold'>
            {/* Main Text*/}
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#ec5389] to-[#f0256c]'>
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Marcus Osaka',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'a Web Developer',
                1000,
                'a Programmer',
                1000,
                'a Designer',
                1000
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[--text-primary] text-base sm:text-lg lg:text-xl mb-6'>
            {/* Description */}
            Trying to become a Web Developer :p
          </p>

          <div>
            {/*Buttons */}

            <button className='w-full md:w-fit px-6 py-4 bg-gradient-to-br from-[#ec5389] to-[#f0256c] rounded-full mr-4 text-[--text-primary]'>
              Hire Me
            </button>

            <button className='w-full md:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-[#ec5389] to-[#f0256c] hover:bg-[--contrast-primary] text-[--text-primary] mt-4'>

              <span className='block bg-[--bg-primary] hover:bg-gradient-to-br from-[#ec5389] to-[#f0256c]  rounded-full px-6 py-4'>
                Download CV
              </span>

            </button>

          </div>

        </div>


        <div className="col-span-5 place-self-center mt-6 mb-6 lg:mt-0 lg:mb-0">
          {/* 5 span of 12 for second section*/}

          <div className="rounded-full bg-[--bg-secondary] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            {/* My Image */}
            <Image
              src={"/hero-image.jpg"}
              alt='Hero Image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full lg:w-[350px] lg:h-[350px]'
              width={250}
              height={250}
            />
          </div>

        </div>

      </div>

    </section >

  )
}

export default HeroSection