import React from 'react'
import { Code, Cpu, Zap, Users } from 'lucide-react'

const FeatureCard= ({ title, description, icon: Icon }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
    <Icon className="w-12 h-12 mb-4 text-blue-400" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
)

export function TechnicalAboutUs() {
  return (
    <section className="relative py-20 px-4 bg-[#09112d] text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            ABOUT US
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are the driving force behind technical innovation at IIT Patna. Our mission is to foster a culture of technological excellence and creativity among students through workshops, hackathons, and groundbreaking projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="Technical Workshops" 
            description="Hands-on learning experiences with cutting-edge technologies and industry experts."
            icon={Code}
          />
          <FeatureCard 
            title="Innovation Hub" 
            description="Access to state-of-the-art equipment and resources for project development."
            icon={Cpu}
          />
          <FeatureCard 
            title="Competitions" 
            description="Regular hackathons and technical competitions to showcase your skills."
            icon={Zap}
          />
          <FeatureCard 
            title="Mentorship" 
            description="Connect with experienced mentors and build your professional network."
            icon={Users}
          />
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-gray-400">Years since Inception</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
            <div className="text-gray-400">Projects Done</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-blue-400 mb-2">300+</div>
            <div className="text-gray-400">Active Members</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-blue-400 mb-2">Multiple</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  )
}