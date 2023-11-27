import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[--bg-primary]">

      <Navbar />

      <div className="container mx-auto px-12 py-4">
        {/* Container */}

        <HeroSection />

      </div>

    </main>
  )
}
