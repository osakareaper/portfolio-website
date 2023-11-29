"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul>
        <li>
          🩷 C & C++
        </li>
        <li>
          🩷 Python
        </li>
        <li>
          🩷 TypeScript & JavaScript
        </li>
        <li>
          🩷 Next.js
        </li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul>
        <li>
          🎓 UnB - Software Engineering
        </li>
        <li>
          🇺🇸 English - Advanced
        </li>
        <li>
          🇧🇷 Portuguese - Native Speaker
        </li>
      </ul>
    )
  },
  {
    title: "Awards",
    id: "Awards",
    content: (
      <ul>
        <li>
          🥉 3rd - Maratona Fraldinha de Programação IESB 2023
        </li>

      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTansition] = useTransition();

  const handleTabChange = (id) => {
    startTansition(() => {
      setTab(id);
    });

  }


  return (
    <section className='text-[--text-primary]'>

      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>

        <div className='relative h-full pt-28'>
          <Image
            src={"/about-me.gif"}
            alt='About Me GIF'
            className='rounded-md grayscale w-[220px] h-[120px] sm:w-[220px] sm:h-[160px] lg:w-[250px] lg:h-[210px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={250}
            height={250}
          />

          <Image
            src={"/tv.png"}
            alt='TV Png'
            className='rounded-md grayscale w-[230px] h-[150px] sm:w-[300px] sm:h-[200px] lg:w-[420px] lg:h-[250px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={250}
            height={250}
          />
        </div>

        <div className='mt-16 sm:mt-24 md:mt-0 text-left flex flex-col h-full'>
          <h2
            className='text-4xl font-bold text-[--text-primary] mb-4'>
            About Me
          </h2>

          <p
            className='text-base lg:text-lg'>
            I&apos;m obssessed with art and creating things.
          </p>

          <div className='flex flex-row mt-8'>

            <TabButton selectTab={() => handleTabChange("Skills")} active={tab === "Skills"}> Skills </TabButton>

            <TabButton selectTab={() => handleTabChange("Education")} active={tab === "Education"}> Education </TabButton>

            <TabButton selectTab={() => handleTabChange("Awards")} active={tab === "Awards"}> Awards </TabButton>

          </div>

          <div className='mt-6'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutSection 
