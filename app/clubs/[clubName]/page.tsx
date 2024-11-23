import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from "../../components/ui/button"
import { Instagram, Linkedin } from 'lucide-react'

export default function ClubPage({ params }: { params: { clubName?: string } }) {
  if (!params.clubName) {
    notFound()
  }

  const clubName = params.clubName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="relative">
        <div className="relative h-[60vh]">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Club+Hero+Image"
            alt={`${clubName} hero image`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">{clubName}</h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl text-center mb-10">
              Discover the exciting world of {clubName} at IIT Patna
            </p>
            <Button variant="default" size="lg" className="text-xl py-6 px-8">Learn More</Button>
          </div>
        </div>

        <main className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The {clubName} at IIT Patna is dedicated to exploring and advancing the frontiers of our field. 
              We provide a platform for students to learn, innovate, and collaborate on exciting projects.
              Our mission is to foster creativity, technical excellence, and leadership among our members.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Activities</h2>
            <ul className="text-xl text-gray-300 space-y-4">
              <li>• Weekly workshops and tech talks by industry experts</li>
              <li>• Hands-on project development in cutting-edge technologies</li>
              <li>• Participation in national and international competitions</li>
              <li>• Industry collaborations and internship opportunities</li>
              <li>• Annual showcase at IIT Patna's tech fest</li>
            </ul>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-6">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-64 rounded-xl overflow-hidden group">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Project+${i}`}
                    alt={`Project ${i}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-2xl font-semibold text-white">Project {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
            <div className="flex space-x-6">
              <Link href="https://www.instagram.com" className="text-pink-500 hover:text-pink-400 transition-colors">
                <Instagram size={48} />
              </Link>
              <Link href="https://www.linkedin.com" className="text-blue-500 hover:text-blue-400 transition-colors">
                <Linkedin size={48} />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
