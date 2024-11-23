import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from "../../components/ui/button"
import { Instagram, Linkedin } from 'lucide-react'
import { Card } from '../../components/ui/apple-cards-carousel' // Assuming Card is imported correctly

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

export default function ClubPage({ params }: { params: { clubName?: string } }) {
  if (!params.clubName) {
    notFound()
  }

  const clubName = params.clubName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  let selectedClub = null;
  for (let i = 0; i < clubsList.length; i++) {
	  if (clubsList[i].name.toLowerCase() == clubName.toLowerCase()) {
		  selectedClub = clubsList[i];
		  break;
	  }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
    { selectedClub != null && <Card
            card={{
              title: selectedClub.name,
              category: selectedClub.category,
              content: selectedClub.content,
              src: selectedClub.src,
              
            }}
            index={0}
            layout={false}
          /> }
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
