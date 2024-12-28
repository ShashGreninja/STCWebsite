'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Info, Calendar, Code, Users, ChevronDown } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { Card } from './ui/apple-cards-carousel' // Assuming Card is imported correctly

// Define the type for clubs
type Club = {
  name: string
  category: string
  content: string
  src: string
}

// List of clubs with details
const clubsList: Club[] = [
  { name: "NJACK", category: "Coding", content: "NJACK is the coding club of IIT Patna. We aim to flourish a group of hardcore coding enthusiasts through productive sessions and fun events. We will continue the legacy of unconditionally guiding fellow students of the IIT Patna fraternity across the various domains of Computer Science.", src: "/images/NJACK.png" },
  { name: "MoodBoard", category: "Design", content: "MoodBoard Design Club at IIT Patna is a dynamic community that fosters creativity and design skills among students. Throughout the year, the club engages in various workshops, collaborative projects, and exhibitions to enhance members' visual communication and design thinking abilities. The club serves as a platform for students to explore various facets of design, from graphic design and photo manipulation to 3D animation and user experience design.", src: "/images/moodboard.jpg" },
  { name: "AP Club", category: "Physics", content: "Astronomy and Particle Physics (AP) Club is a team of enthusiastic people who share a common goal of exploring, studying, and experimenting with a wide variety of Astronomy and Particle Physics related topics, facts, and new discoveries. We have been trying to make people aware of scintillating stuff right from the nano-level world to the vastness of the cosmos!", src: "/images/apclub.jpg" },
  { name: "SCME", category: "Mechanical engineering", content: "SCME was founded with the motive of engaging and encouraging Mechanical Engineering discipline related activities in IIT Patna. Since its inception, SCME has been conducting events, lectures and workshops round the year for the benefit of mechanical engineering students.", src: "/images/scme.jpg" },
  { name: "MaTES", category: "Materials and Metallurgy", content: "MaTES is a combined step of students and faculty of IIT PATNA to create an environment of inquisitiveness about metallurgy and materials through various interesting events, informative workshops and inquisitive guest lectures. Our organization's aim is to promote creativity, potency, morals in students and boost awareness about materials in the society.", src: "/images/mates.jpg" },
  { name: "ChessX", category: "Chemical Engineering", content: "ChESSx aims at providing the needed support to produce the best chemical engineering graduates of tomorrow. It aims at making the students familiar with the scientific and industrial know-how and well equipping them to handle real-world problems so that they can better adapt themselves at their workplace once they graduate.", src: "/images/chessx.jpg" },
  { name: "Sparkonics", category: "Electronics", content: "Sparkonics is the Electrical engineering society of IIT Patna which aims to make students aware and better equipped to handle real world problems related to Electrical engineering and related interdisciplinary fields by the means of projects and various workshops and guest lectures.", src: "/images/sparkonics.jpg" },
  { name: "Phoenix", category: "Robotics", content: "Team Phoenix IIT Patna is the official robotics contingent of IIT Patna in ABU Robocon. We seek passionate individuals and offer diverse learning opportunities in robotics through workshops, hackathons, and mentorship programs, including participation in the MathWorks Simulation contest.", src: "/images/phoenix.jpg" },
  { name: "Tinkerers' Club", category: "Innovation", content: "Tinkerer's Lab at IIT Patna allows you to build things on your own, from scratch. This gives you practical and hands-on experience. The lab is almost entirely student run.The lack of deadlines and pressure allows you to tinker and develop your ideas with full freedom.", src: "/images/tinkerers.jpg" },
  { name: "ACE", category: "Civil Engineering", content: "The Association of Civil Engineers is an official club of the Department of Civil and Environmental Engineering at IIT Patna. It aims to facilitate student-faculty interaction, provide a platform for showcasing work and knowledge, and enhance abilities through workshops and events.", src: "/images/ace.jpg" },
  { name: "RNA Club", category: "Robotics and Aviation", content: "RnA or Robotics and Aviation Club of IIT Patna is a newly formed club that focuses on drones, MAVs (Micro air Vehicles), and aviation robotics. Here in RnA club, we all are family without any partiality.", src: "/images/rna.jpg" },
  { name: "TIC", category: "Finance", content: "The Trading and Investment Club at IIT Patna is rapidly growing and emphasizes consulting, investing, marketing, and product management. With a focus on winning competitions, creating opportunities, and skill-building, the club aims to establish a lasting finance legacy and become a top student-run club in India.", src: "/images/finance.jpg" },
  { name: "Ecell", category: "Enterpreneurship", content: "Welcome to the Entrepreneurship Cell (E-Cell) at IIT Patna, a vibrant community dedicated to fostering innovation, entrepreneurship, and leadership among students. Our mission is to inspire and empower the next generation of entrepreneurs by providing them with the resources, mentorship, and opportunities needed to turn their ideas into successful ventures.", src: "/images/finance.jpg" },
  { name: "MotorSports", category: "Automobiles and motorsports", content: "Welcome to Motorsports IITP, the premier club for automobile enthusiasts and aspiring engineers at IIT Patna! Our club is dedicated to fostering a passion for motorsports and providing hands-on experience in automotive engineering, design, and innovation.", src: "/images/finance.jpg" }
]

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-full z-20">
        <div className="px-4 py-2">
          <ul className="flex items-center space-x-6">
            <li className="flex-shrink-0 mr-6">
              <Link href="/" className="text-2xl font-extrabold text-white">STC</Link>
            </li>
            {[
              { name: 'Home', icon: Home, href: "/" },
              { name: 'About', icon: Info, href: "/#about" },
              { name: 'Events', icon: Calendar, href: "/#events" },
              { name: 'Tech Season', icon: Code, href: 'https://stc.iitp.ac.in/techseason/index.html' },
              { name: 'Clubs', icon: Users, href: "/#clubs" },
              { name: 'Team', icon: Users, href: "/#team" },
               // Added Clubs button
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`flex items-center space-x-1 p-2 rounded-full transition-colors ${
                    isActive(item.href) ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
