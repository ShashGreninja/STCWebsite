'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "./components/ui/button"
import Link from "next/link"
import "boxicons/css/boxicons.min.css"
// import { SparklesCore } from './components/ui/celesta'
import { ContainerScroll } from './components/ui/container-scroll-animation'
import { Home, Info, Calendar, Users, Code, ChevronDown } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import { Carousel, Card } from "./components/ui/apple-cards-carousel"
import { Timeline } from "./components/ui/timeline"
import { Tabs } from "../app/components/ui/tabs"
import { useRouter } from "next/router"
import NeonButton from './components/ui/Button1'
import { AnimatedTestimonials } from './components/ui/animated-testimonials'
import Navbar from './components/Navbar'
import { TechnicalAboutUs } from './components/ui/about-us'
import { motion } from "framer-motion";
import "./scroll-smooth.css"
import { LampContainer } from './components/ui/lamp'
import Button1 from './components/ui/Button1'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Vortex } from "../app/components/ui/vortex"
// import { LayoutGrid } from './components/ui/celesta'
import { FlipWords } from './components/ui/celesta'
import CelestaBanner from './components/ui/banner'
const montserrat = Montserrat({ subsets: ['latin'] })
const clubsList = [
  "NJACK", "MoodBoard", "AP Club", "SCME", "MATES", "ChessX", "Sparkonics", "Phoenix", "Tinkerers' Club", "ACE", "RNA Club", "Finance"
]

function AboutCard({ icon, head, body }: { icon: string, head: string, body: string }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        <div className="flex items-center">
          <i className={`bx ${icon} text-3xl`}></i>
          {head}
        </div>
      </button>
      {show && <div>{body}</div>}
      <hr />
    </div>
  )
}

function Footer() {
  return (
    <div className="flex items-center px-20 mb-8">
      <div className="basis-0 grow">
        <Image
          src="https://stc.iitp.ac.in/assets/img/logo-text.png"
          alt="STC Logo"
          width={500}
          height={500}
        />
        <p>The council of Student's Gymkhana to nurture the advancement of technical culture of Indian Institute of Technology, Patna</p>
      </div>
      <div className="flex flex-col basis-0 grow">
        <h1>QUICK LINKS</h1>
        <p>NJACK</p>
        <p>Sparkonics</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0697031196537!2d84.8513104!3d25.536054999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5700288d5577%3A0xb87d51692f417876!2sStudent&#39;s%20Technical%20Council%20Office!5e0!3m2!1sen!2sin!4v1732044561583!5m2!1sen!2sin" allowFullScreen className="w-[300px] h-[200px] sm:w-[400px] sm:h-[300px]" style={{ border: 0 }}></iframe>
    </div>
  )
}

export default function Page() {
  const [activeTab, setActiveTab] = useState('home')
  const [isClubsOpen, setIsClubsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

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

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const clubcards = clubdata.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const data_ = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            8th position among all IITs in the meet.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/interiittech12.0/IMG20231222191123.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech12.0/IMG20231222183140.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech12.0/1000050242-01.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech12.0/20231221_112957.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            7th position among all IITs in the meet.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/interiittech11.0/11.0result.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech11.0/DSC_5542.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech11.0/DSC_5497.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech11.0/IMG20230210182003.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            9th position among all IITs in the meet.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/interiittech10.0/279008917_5692980604063021_4883747500802782310_n.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech10.0/Screenshot 2024-11-18 023048.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech10.0/Screenshot 2024-11-18 022944.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech10.0/Screenshot 2024-11-18 023133.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];


  const tabs = [
    {
      title: "2024-25",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#491580] to-[#300356]">
          <p>2024-25 Team</p>
          <>
            {[...new Array(3).fill(1)].map((_, index) => {
              return (
                <div
                  key={"dummy-content" + index}
                  className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                >
                  <div>
                    <AnimatedTestimonials testimonials={testimonials1} />
                  </div>

                </div>
              );
            })}
          </>
        </div>
      ),
    },
    {
      title: "2023-24",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>2023-24 Team</p>
          <>
            {[...new Array(3).fill(1)].map((_, index) => {
              return (
                <div
                  key={"dummy-content" + index}
                  className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                >
                  <div>
                    <AnimatedTestimonials testimonials={testimonials2} />
                  </div>

                </div>
              );
            })}
          </>
        </div>
      ),
    },
    {
      title: "2022-23",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>2022-23 Team</p>
          <>
            {[...new Array(3).fill(1)].map((_, index) => {
              return (
                <div
                  key={"dummy-content" + index}
                  className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                >
                  <div>
                    <AnimatedTestimonials testimonials={testimonials3} />
                  </div>

                </div>
              );
            })}
          </>
        </div>
      ),
    },
    {
      title: "2021-22",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>2021-22 Team</p>
          <>
            {[...new Array(3).fill(1)].map((_, index) => {
              return (
                <div
                  key={"dummy-content" + index}
                  className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                >
                  <div>
                    <AnimatedTestimonials testimonials={testimonials4} />
                  </div>

                </div>
              );
            })}
          </>
        </div>
      ),
    },
    // {
    //   title: "Random",
    //   value: "random",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Random tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <>

      <div className={`min-h-screen flex flex-col ${montserrat.className}`}>
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
                  src={`/images/image.png`}
                  alt="hero"
                  height={720}
                  width={1440}
                  className="mx-auto rounded-2xl object-fill h-full object-left-top"
                  draggable={false}
                />
              </ContainerScroll>
            </div>

          </div>
        </main>
      </div>
      <div id="about" className="w-full pt-200vh lg:pt-[50vh]"><TechnicalAboutUs></TechnicalAboutUs></div>
      <div id="timeline" className="w-full pt-100vh lg:pt-[15vh]">
        <Timeline data={data_} />
      </div>

      <div id="events" className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          STC Events
        </h2>
        <Carousel items={cards} />
      </div>

      <div className="pt-24"><LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-[#0a0a0a] to-[#0a0a0a] py-4 bg-clip-text text-center text-1xl font-medium tracking-tight text-transparent md:text-4xl pt-1"
        >
          P R E S E N T I N G

        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -30 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-7xl font-medium tracking-tight text-transparent md:text-9xl pt-1"
        >
          O N E I I T P

        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-1xl font-thin tracking-tight text-transparent md:text-2xl pt-1"
        >

          <Button1 />


        </motion.h1>

      </LampContainer>
      </div>
      <div><CelestaBanner
        backgroundImageUrl="/images/celesta.jpg"
        websiteUrl="https://celesta.iitp.ac.in" />

      </div>

      <div id="clubs" className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          STC Clubs
        </h2>
        <Carousel items={clubcards} />
      </div>

      {/* <div className="items-center justify-center text-center space-y-4 sm:space-y-0 sm:space-x-6 pt-32 pb-4">
        <Button variant="default" size="lg"></Button>
        <Button variant="default" size="lg"></Button>
      </div> */}

      <div id="team" className="h-[70rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-4">
        <Tabs tabs={tabs} />
      </div>

      <div className="items-center justify-center text-center space-y-4 sm:space-y-0 sm:space-x-6 pt-32 pb-4">


      </div>

      <div className="items-center justify-center text-center space-y-4 sm:space-y-0 sm:space-x-6 pt-32 pb-4">
        <Button variant="default" size="lg"></Button>
        <Button variant="default" size="lg"></Button>
      </div>


      <Vortex
        backgroundColor="rgb(1,1,1)"
        className="flex-wrap flex items-center  justify-center space-around px-2 md:px-10 py-2 w-full h-full relative bottom"
      >
        <h2 className="text-white text-9xl md:text-8xl font-bold text-center p-3">
          STC<div className="text-5xl md:text-2xl">IIT P</div>
        </h2>
        <p className="text-white text-sm md:text-l max-w-xl mt-6 text-center p-14">
          The council of Student's Gymkhana to nurture the advancement of technical culture of Indian Institute of Technology, Patna.
          <br />© Copyright Student Technical Council, IITP.
          <br />Contact us at stc@iitp.ac.in ; gensec_tech@iitp.ac.in
        </p>


        <div className="flex justify-center space-x-4 text-[#e6e6e6] m-12">
          {/* Instagram */}
          <img width="80vw" src="/images/download.png" alt="IITP gymkhana"></img>
          <a
            href="https://www.instagram.com/iitpatna_stc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/stc_iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/stc.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <div className="w-full sm:w-auto flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0697031196537!2d84.8513104!3d25.536054999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5700288d5577%3A0xb87d51692f417876!2sStudent&#39;s%20Technical%20Council%20Office!5e0!3m2!1sen!2sin!4v1732065303619!5m2!1sen!2sin"
            allowFullScreen
            className="w-[150px] h-[100px] md:w-[300px] md:h-[200px] "
            style={{ border: 0 }}
          ></iframe></div>
      </Vortex>

    </>
  )
}


const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="inline-block font-bold text-neutral-700 dark:text-neutral-200">
                Yaha pe team info we will have...
              </span>{" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat soluta, obcaecati dignissimos itaque animi nesciunt modi id, minima earum beatae vel, rem natus culpa.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const clubdata = [
  {
    title: "NJACK",
    category: "Coding",
    content: (
      <>
        <p>
          NJACK is the coding club of IIT Patna. We aim to flourish a group of hardcore coding enthusiasts through productive sessions and fun events. We will continue the legacy of unconditionally guiding fellow students of the IIT Patna fraternity across the various domains of Computer Science.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/njackiitp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://in.linkedin.com/company/njack-iit-patna"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/NJACK.png"
  },
  {
    title: "MoodBoard",
    category: "Design",
    content: (
      <>
        <p>
          MoodBoard Design Club at IIT Patna is a dynamic community that fosters creativity and design skills among students. Throughout the year, the club engages in various workshops, collaborative projects, and exhibitions to enhance members' visual communication and design thinking abilities. The club serves as a platform for students to explore various facets of design, from graphic design and photo manipulation to 3D animation and user experience design.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/designclub.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/moodboard-iitp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bd6cj8r1JTOO7YDwmH0crFA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/MoodBoard.png"
  },
  {
    title: "AP Club",
    category: "Physics",
    content: (
      <>
        <p>
          Astronomy and Particle Physics (AP) Club is a team of enthusiastic people who share a common goal of exploring, studying, and experimenting with a wide variety of Astronomy and Particle Physics related topics, facts, and new discoveries. We have been trying to make people aware of scintillating stuff right from the nano-level world to the vastness of the cosmos!
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/apclub.iitp?igsh=ZWw4Y3ZsbXc4M2wz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/ap-club-iitp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/APC.png"
  },
  {
    title: "SCME",
    category: "Mechanical Engineering",
    content: (
      <>
        <p>
          SCME was founded with the motive of engaging and encouraging Mechanical Engineering discipline related activities in IIT Patna. Since its inception, SCME has been conducting events, lectures and workshops round the year for the benefit of mechanical engineering students.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/scme_iitp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/iitp-motorsports/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/scmelogo.jpg"
  },
  {
    title: "MaTES",
    category: "Materials and Metallurgy",
    content: (
      <>
        <p>
          MaTES is a combined step of students and faculty of IIT PATNA to create an environment of inquisitiveness about metallurgy and materials through various interesting events, informative workshops and inquisitive guest lectures. Our organization's aim is to promote creativity, potency, morals in students and boost awareness about materials in the society.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/mates__iitp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/mates-materials-engineering-society-iit-patna/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/MaTESlogo.png"
  }, {
    title: "ChessX",
    category: "Chemical Engineering",
    content: (
      <>
        <p>
          ChESSx aims at providing the needed support to produce the best chemical engineering graduates of tomorrow. It aims at making the students familiar with the scientific and industrial know-how and well equipping them to handle real-world problems so that they can better adapt themselves at their workplace once they graduate.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/chessx_iitp?igsh=YWdzMnk5eGszenRj&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/chemical-engineering-students-society-chessx-iit-patna-874725219/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/ChESSxLogo.jpg"
  },
  {
    title: "Sparkonics",
    category: "Electronics",
    content: (
      <>
        <p>
          Sparkonics is the Electrical engineering society of IIT Patna which aims to make students aware and better equipped to handle real-world problems related to Electrical engineering and related interdisciplinary fields by the means of projects and various workshops and guest lectures.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/sparkonics.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/sparkonics/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/Sparkonics.png"
  },
  {
    title: "Phoenix",
    category: "Robotics",
    content: (
      <>
        <p>
          Team Phoenix IIT Patna is the official robotics contingent of IIT Patna in ABU Robocon. We seek passionate individuals and offer diverse learning opportunities in robotics through workshops, hackathons, and mentorship programs, including participation in the MathWorks Simulation contest.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/teamphoenix.iitp?igsh=czQwbGFkcHNwejU4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/team-phoenix-robocon-iit-patna/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/phoenix.jpg"
  },
  {
    title: "Tinkerers' Club",
    category: "Innovation",
    content: (
      <>
        <p>
          Tinkerer's Lab at IIT Patna allows you to build things on your own, from scratch. This gives you practical and hands-on experience. The lab is almost entirely student-run. The lack of deadlines and pressure allows you to tinker and develop your ideas with full freedom.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/tinkerers_lab_iitp?igsh=MTg1NXlveG9rbG9mdA=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/tinkerers-lab-iitp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/tinkerers.png"
  },
  {
    title: "ACE",
    category: "Civil Engineering",
    content: (
      <>
        <p>
          The Association of Civil Engineers is an official club of the Department of Civil and Environmental Engineering at IIT Patna. It aims to facilitate student-faculty interaction, provide a platform for showcasing work and knowledge, and enhance abilities through workshops and events.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/ace_iitp?igsh=amowc2M4cnpzbG11"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/ace-iit-patna"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/ACElogo.png"
  },
  {
    title: "RNA Club",
    category: "Robotics and Aviation",
    content: (
      <>
        <p>
          RnA or Robotics and Aviation Club of IIT Patna is a newly formed club that focuses on drones, MAVs (Micro Air Vehicles), and aviation robotics. Here in RnA club, we all are family without any partiality.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/rna.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/robotics-and-aviation-club-iit-patna"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/RnAlogo.png"
  },
  {
    title: "TIC",
    category: "Finance",
    content: (
      <>
        <p>
          The Trading and Investment Club at IIT Patna is rapidly growing and emphasizes consulting, investing, marketing, and product management. With a focus on winning competitions, creating opportunities, and skill-building, the club aims to establish a lasting finance legacy and become a top student-run club in India.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/tic_iitpatna?igsh=OWxpNHc3dGRtajZy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/ticiitp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/TIClogo.jpg"
  },
  {
    title: "Ecell",
    category: "Entrepreneurship",
    content: (
      <>
        <p>
          Welcome to the Entrepreneurship Cell (E-Cell) at IIT Patna, a vibrant community dedicated to fostering innovation, entrepreneurship, and leadership among students. Our mission is to inspire and empower the next
          generation of entrepreneurs through various workshops, events, and mentorship opportunities. E-Cell provides a platform for budding entrepreneurs to transform their ideas into successful ventures.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/ecell_iitpatna/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/school/ecell-iit-patna/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/EcellLogo.jpg"
  }, {
    title: "Quantum Technology Club",
    category: "Quantum Technology",
    content: (
      <>
        <p>
        Quantum Technology Club looks forward to bring all the quantum enthusiasts under a common hood and spread awareness about the fast growing quantum technology among the student community. The club tries to solve different problems using quantum computing techniques in such a time which is much less than that taken by a classical computer.
        </p>
        <div style={{ marginTop: '20px' }}>
          <img src="/images/dummy1.jpg" alt="Dummy Image 1" />
          <p>Caption for Dummy Image 1</p>
          <img src="/images/dummy2.jpg" alt="Dummy Image 2" />
          <p>Caption for Dummy Image 2</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a
            href="https://www.instagram.com/qtc.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://in.linkedin.com/company/quantum-technology-club"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'blue'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    src: "/images/quantum_technology_club_logo.jpeg"
  }

];





const data = [
  {
    category: "Astronomy and Particle Physics Club",
    title: "National Space Day-2024",
    src: "/images/APC.png",
    content: <ul><li>Quiz</li>
      <li>22-23/08/24</li>
      <li>No Time</li>
      <li>live streaming, poster, quiz, movie night</li>
      <li>5:30pm-8:30pm</li></ul>,
  },
  {
    category: "NJACK",
    title: "NSoC Game Jam",
    src: "/images/NJACK.png",
    content: <ul><li>Competition</li>
      <li>01/07/2024</li>
      <li>No Time</li>
      <li>Venue not decided</li>
      <li>No Description</li></ul>,
  },
  {
    category: "NJACK",
    title: "NSoC Animation Challenge",
    src: "/images/NJACK.png",
    content: <ul><li>Competition</li>
      <li>09/07/2024</li>
      <li>No Time</li>
      <li>Venue not decided</li>
      <li>No Description</li></ul>,
  },

  {
    category: "Sparkonics",
    title: "Electrivia - v1.0",
    src: "/images/Sparkonics.png",
    content: <ul><li>Quiz</li>
      <li>09/07/2024</li>
      <li>No Time</li>
      <li>General Knowledge related quizzes to improve the grip</li>
      <li>All Day</li></ul>,
  },
  {
    category: "NJACK",
    title: "NSoC Design Challenge",
    src: "/images/NJACK.png",
    content: <ul><li>Competition</li>
      <li>16/07/2024</li>
      <li>No Time</li>
      <li>Venue not decided</li>
      <li>All Day</li></ul>,
  },
  {
    category: "Moodboard",
    title: "Inter IIT Orientation",
    src: "/images/MoodBoard.png",
    content: <ul><li>Seminar</li>
      <li>18/08/2024</li>
      <li>No Time</li>
      <li>Venue not decided</li>
      <li>5-7 PM</li></ul>,
  },
];

const testimonials1 = [
  {
    quote:
      "",
    name: "Dr. Somanath Pradhan",
    designation: "PIC Technical Affairs",
    src: "/images/team2024-25/drsomnath.png",
  },
  {
    quote:
      "",
    name: "Kirtan Jain",
    designation: "General Secretary, Technical Affairs",
    src: "/images/team2024-25/KirtanJain.png",
  },
  {
    quote:
      "",
    name: "Rishu Kumar Singh",
    designation: "Technical Secretary, Sophomore Year",
    src: "/images/team2024-25/RishuSingh.png"
  },
  {
    quote:
      "",
    name: "Hemant Chaurasia",
    designation: "Technical Secretary, Junior Year",
    src: "/images/team2024-25/HemantChaurasia.png",
  },
  {
    quote:
      "",
    name: "Harshit Dhankhar",
    designation: "Technical Secretary, Senior Year",
    src: "/images/team2024-25/Harshit.png",
  },
  {
    quote:
      "",
    name: "Pranjal Chamaria",
    designation: "Technical Secretary, UG Girls",
    src: "/images/team2024-25/Pranjal.png",
  },
];

const testimonials2 = [
  {
    quote:
      "",
    name: "Dr. Bachu Anilkumar",
    designation: "PIC Technical Affairs",
    src: "/images/team2023-24/Bachu_Anilkumar1.jpg",
  },
  {
    quote:
      "",
    name: "Rishikesh Devanathan",
    designation: "General Secretary, Technical Affairs",
    src: "/images/team2023-24/rishikesh.jpg",
  },
  {
    quote:
      "",
    name: "Akhand Singh",
    designation: "Technical Secretary, Sophomore Year",
    src: "/images/team2023-24/Akhand.png"
  },
  {
    quote:
      "",
    name: "Aryan Sahoo",
    designation: "Technical Secretary, Junior Year",
    src: "/images/team2023-24/Aryan.png",
  },

  {
    quote:
      "",
    name: "Pragya Harsh",
    designation: "Technical Secretary, UG Girls",
    src: "/images/team2023-24/pragya.jpeg",
  },
];

const testimonials3 = [
  {
    quote:
      "",
    name: "Dr. Anoop Kumar Gupta",
    designation: "PIC Technical Affairs",
    src: "/images/team2022-23/AKGupta.jpg",
  },
  {
    quote:
      "",
    name: "Shivam Sahu",
    designation: "General Secretary, Technical Affairs",
    src: "/images/team2022-23/Shivam.jpg",
  },
  {
    quote:
      "",
    name: "Harsh Singh",
    designation: "Technical Secretary, Sophomore Year",
    src: "/images/team2022-23/HarshSingh.png"
  },
  {
    quote:
      "",
    name: "Rishikesh Devanathan",
    designation: "Technical Secretary, Junior Year",
    src: "/images/team2022-23/rishikesh.jpg",
  },
  {
    quote:
      "",
    name: "Omkar Deshpande",
    designation: "Technical Secretary, Senior Year",
    src: "/images/team2022-23/Omkar.jpg",
  },

  {
    quote:
      "",
    name: "Anushka Pandey",
    designation: "Technical Secretary, UG Girls",
    src: "/images/team2022-23/AnushkaPandey.jpg",
  },
];

const testimonials4 = [
  {
    quote:
      "",
    name: "Dr. Sujoy Kumar Samanta",
    designation: "PIC Technical Affairs",
    src: "/images/team2021-22/dr.sujoy.jpg",
  },
  {
    quote:
      "",
    name: "Satyam Shukla",
    designation: "General Secretary, Technical Affairs",
    src: "/images/team2021-22/satyam.jpg",
  },
  {
    quote:
      "",
    name: "Rishikesh Devanathan",
    designation: "Technical Secretary, Sophomore Year",
    src: "/images/team2021-22/rishikesh.jpg"
  },
  {
    quote:
      "",
    name: "Shubham Kumar",
    designation: "Technical Secretary, Junior Year",
    src: "/images/team2021-22/shubham.jpg",
  },
  {
    quote:
      "",
    name: "Anuj Kumar Yadav",
    designation: "Technical Secretary, Senior Year",
    src: "/images/team2021-22/anuj.jpg",
  },

  {
    quote:
      "",
    name: "Kalpana Bishnoi",
    designation: "Technical Secretary, UG Girls",
    src: "/images/team2021-22/kalpana.jpg",
  },
];
/* vi: set et sw=2: */
