'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Info, Calendar, Code, Users, ChevronDown } from 'lucide-react'

const clubsList = [
  "Robotics Club", "Coding Club", "Electronics Club", "3D Printing Club",
  "Aeromodelling Club", "Astronomy Club", "Automobile Club", "Biotech Club",
  "Chemical Club", "Civil Club", "Design Club", "Energy Club",
  "Finance Club", "Gaming Club", "Literary Club", "Mathematics Club",
  "Music Club", "Photography Club", "Quizzing Club", "Sports Club"
]

export default function Navbar() {
  const [isClubsOpen, setIsClubsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsClubsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  return (
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
            { name: 'Team', icon: Users, href: "/#team" }
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
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
          <li
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsClubsOpen(true)}
            onMouseLeave={() => setIsClubsOpen(false)}
          >
            <button
              className={`flex items-center space-x-1 p-2 rounded-full transition-colors ${
                pathname.startsWith('/clubs') ? 'bg-white text-black' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsClubsOpen(!isClubsOpen)}
              aria-expanded={isClubsOpen}
              aria-haspopup="true"
            >
              <span className="hidden sm:inline">Clubs</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            {isClubsOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-30">
                <div className="py-1 max-h-96 overflow-y-auto">
                  {clubsList.map((club) => (
                    <Link
                      key={club}
                      href={`/clubs/${club.toLowerCase().replace(/ /g, '-')}`}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                        pathname === `/clubs/${club.toLowerCase().replace(/ /g, '-')}` 
                          ? 'bg-gray-100 text-gray-900' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                      onClick={() => setIsClubsOpen(false)}
                    >
                      {club}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}
