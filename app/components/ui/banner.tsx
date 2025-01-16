import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FlipWords } from './celesta'

interface CelestaBannerProps {
  backgroundImageUrl: string
  websiteUrl: string
}
const words = ["ROBOTIC EVENTS", "WORKSHOPS", "GUEST LECTURES", "PRONITES"];

const CelestaBanner: React.FC<CelestaBannerProps> = ({ backgroundImageUrl, websiteUrl }) => {
  return (
    
    <div className="relative h-[60vh] w-full overflow-hidden">
      <Image
        src={backgroundImageUrl}
        alt="Celesta Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-[50] text-white mb-8 tracking-wider">
         C E L E S T A
        </h1>
        
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 pt-0 text-center">
        Experience
        <FlipWords words={words} /> <br />
        all at the TechFest Of IIT Patna
      </div>
    
        <Link href={websiteUrl} passHref>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105 mt-8">
            Visit the Website
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CelestaBanner
