'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "./components/ui/button"

import { ContainerScroll } from './components/ui/container-scroll-animation'
import { Home, Info, Calendar, Settings } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Page() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className={`min-h-screen flex flex-col ${montserrat.className}`}>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-full z-20">
        <div className="px-4 py-2">
          <ul className="flex items-center space-x-6">
            <li className="flex-shrink-0 mr-6">
              <span className="text-2xl font-extrabold text-white">STC</span>
            </li>
            {[
              { name: 'Home', icon: Home },
              { name: 'About', icon: Info },
              { name: 'Events', icon: Calendar },
              { name: 'Settings', icon: Settings },
            ].map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveTab(item.name.toLowerCase())}
                  className={`flex items-center space-x-1 p-2 rounded-full transition-colors ${
                    activeTab === item.name.toLowerCase() ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />

          <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              IIT PATNA <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Students Technical Council
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/hero2.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="default" size="lg">Learn More</Button>
            <Button variant="outline" size="lg">Contact Us</Button>
          </div>
        </div>
      </main>
    </div>
  )
}