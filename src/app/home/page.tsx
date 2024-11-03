


import Image from "next/image";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact } from 'react-icons/io5';

export default function Home(){
  return(
    
    <main className="flex justify-center">
    <section className="flex flex-col lg:flex-row max-w-[1200px] w-full p-5 space-y-7 lg:space-y-0">
  
  
      <div className="flex flex-col space-y-10 lg:w-1/2">
        
        <div>
          <h6 className="text-1xl text-darkslategray mt-14">Hey, I am Sana</h6>
          <h1 className="text-2xl lg:text-4xl font-bold text-darkslategray mb-4">
            I am an IT student at GIAIC, <br />
            exploring the exciting fields of Web 3.0, Metaverse, and AI.
          </h1>
          <p className="text-base leading-relaxed">
            As an IT student with a passion for technology, I am deeply engaged in learning the latest advancements
            in software development, including Web 3.0, the Metaverse, and AI. My goal is to become a software developer,
            where I can leverage my skills to build innovative, scalable, and impactful applications.
            I am committed to continuous learning and aim to contribute to the evolving world of tech by developing
            solutions that make a difference.
          </p>
        </div>
  
      
        <div className="skills-section">
      <h6 className="text-lg font-medium mt-10">My Skills</h6>
      <h1 className="text-2xl font-bold mt-3">My Expertise</h1>

      <div className="flex flex-wrap gap-4 justify-start mt-5 mr-8">
        <div className="flex items-center space-x-2">
          <IoLogoHtml5 className="text-2xl sm:text-3xl  text-orange-600" />
          <span>HTML</span>
        </div>
        <div className="flex items-center space-x-2">
          <IoLogoCss3 className="text-2xl sm:text-3xl  text-blue-600" />
          <span>CSS</span>
        </div>
        <div className="flex items-center space-x-2">
          <IoLogoJavascript className="text-2xl sm:text-3xl  text-yellow-500" />
          <span>JavaScript</span>
        </div>
        <div className="flex items-center space-x-2">
          <IoLogoReact className="text-2xl sm:text-3xl  text-cyan-500" />
          <span>Next.js</span>
        </div>
      
      </div>
    </div>
      </div>
  
  
      <div className="flex justify-center mt-10 lg:justify-start lg:w-1/2 lg:mt-10">
        <Image src="/profile.jpg" width="300" height="300" alt="profile" className="rounded-full ml-16" />
      </div>
  
    </section>
  </main>
  
  
  )}