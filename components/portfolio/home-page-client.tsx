"use client";
import { Button } from "@/components/ui/button";
import { AboutStatsCard } from "@/components/portfolio/about-stats-card";
import { SkillsGridCards } from "@/components/portfolio/skills-grid";
import { ProjectCards } from "@/components/portfolio/projects-card";
import { ContactForm } from "@/components/portfolio/contact-form";
import { EducationSection } from "@/components/portfolio/education";
import { ExperienceSection } from "@/components/portfolio/experience";
import { NavBar } from "@/components/portfolio/nav-bar";

export default function HomepageClient() {
  return (
    <main className='flex flex-col px-10 bg-white w-full h-auto gap-14'>
      <NavBar />
        <section id="Hero" className='flex flex-col gap-2.5 px-12 py-2.5 w-full h-lvh justify-center items-center'>
            <h2> // HELLO I'M </h2>
            <h1> SHANTHA KUMAR </h1>
            <h3 className="text-2xl font-light"> Software Engineer | Full-Stack, Data & AI/ML </h3>
            <div className="flex flex-col gap-2.5 px-12 py-2.5 w-full h-auto align-middle items-center">
                <p className = "w-lg text-center">  
                  Building responsive web platforms, training predictive models, and 
                  turning raw data into real-world solutions.
                </p>
            </div>
            <div className="flex flex-row gap-2.5 px-12 py-2.5 w-full h-auto align-middle items-center justify-center">
                <a href="https://drive.google.com/file/d/1SNXynw5jAKr0P6UCAON2YLLnJj1AduLC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary"> Resume </Button>
                </a>
                <a href="#Contact">
                  <Button variant="secondary"> View My Work </Button>
                </a>
            </div>
        </section>
        <section id="About" className='flex flex-col gap-2.5 px-12 py-2.5 w-full h-auto justify-center items-center'>
          <div id="About-Header" className="w-full h-auto flex flex-col gap-2.5 px-12 py-2.5 justify-center items-center">
              <h2> // ABOUT ME </h2>
              <h3> Building with code.</h3>
              <h3> Learning with curiosity.</h3>
          </div>
          <div id="About-Content" className="w-full h-auto flex flex-col gap-2.5 px-12 py-2.5 justify-center items-center">
              <div>
                <p className="text-justify"> 
                  Hi, I’m Shantha Kumar, an aspiring Full-Stack AI Developer. At my core, I love working with computers and building things from the ground up. My current focus is Artificial Intelligence, with a long-term goal of engineering advanced AI assistants inspired by systems like JARVIS and Cortana. I recently graduated with an M.Sc. in Information Technology, and I spend much of my free time exploring new technologies. I may have started later than some in this field, but I’m fully committed to learning, building, and continuously improving. Whether I’m designing a local Retrieval-Augmented Generation (RAG) system using LangChain and FastAPI or building predictive machine-learning workflows, I focus on understanding how things work and creating reliable solutions.
                </p>
                <p className="text-justify pt-3">
                  I’m currently seeking entry-level opportunities as a Software Engineer, Full-Stack Developer, Data Analyst, or AI/Data Scientist, where I can apply my skills in Python, React, and Generative AI to build useful and impactful products.
                </p>
              </div>
              <div className="w-full max-w-5xl">
                <AboutStatsCard />
              </div>
          </div>
        </section>
        <section id="Technologies" className='flex flex-col gap-2.5 px-12 py-2.5 w-full h-auto justify-center items-center'>
          <div id="Tech-Head" className="w-full h-auto flex flex-col gap-2.5 px-12 py-2.5 justify-center items-center">
              <h2> &lt; TECH STACK /&gt; </h2>
              <h3> A snapshot of the tools, languages, and frameworks </h3>
              <h3> I work with day to day.</h3>
          </div>
          <div id="Tech-Grid" className="w-full h-auto flex flex-col gap-2.5 px-12 py-2.5 justify-center items-center">
            <SkillsGridCards />
          </div>
        </section>
        <section id="Projects" className='flex flex-col gap-2.5 px-12 py-2.5 w-full h-auto justify-center items-center'>
          <div id="Project-Head" className="w-full h-auto flex flex-col gap-2.5 px-12 py-2.5 justify-center items-center">
              <h2> Things I’ve Built </h2>
              <h3 className="px-6"> A selection of projects I've shipped — from weekend experiments to full-stack applications. </h3>
          </div>
          <div id="Project-Grid" className="w-full h-auto flex flex-col gap-2.5 px-12 py-2.5 justify-center items-center">
            <ProjectCards />
          </div>
        </section>
          <ExperienceSection/>
          <EducationSection/>
        <section id="Current-Explorations" className='flex flex-col gap-2.5 px-12 py-2.5 w-full h-auto justify-center items-center'>
          <div id="CE-Head" className="w-full h-auto flex flex-col gap-2.5 px-12 py-2.5 justify-center items-center">
              <h2> CURRENTLY EXPLORING </h2>
              <h3 className="px-6 text-5xl"> What’s next on my radar? </h3>
          </div>
          <div id="Content" className="w-full h-auto flex flex-col gap-2.5 px-12 py-2.5 justify-center items-center">
            <p className="text-3xl text-center leading-relaxed font-extralight">I’m currently diving deeper into cloud deployment fundamentals (IBM SkillsBuild) and refining my data pipeline architectures to ensure the applications and models I build are completely production-ready.</p>
          </div>
        </section>
  <section 
      id="Contact" 
      className="flex flex-col md:flex-row gap-12 md:gap-8 px-6 md:px-12 py-16 w-full max-w-6xl mx-auto justify-between items-start text-left"
    >
      {/* Left Column: Headers & Text */}
      <div id="Contact-Content" className="w-full md:w-1/2 flex flex-col gap-4">
        <h2 className="text-left uppercase tracking-widest text-black mb-2">
          GET IN TOUCH
        </h2>
        <h3 className="text-4xl text-left md:text-5xl font-normal text-black mb-2">
          Ready to Write Some Code?
        </h3>
        <p className="text-2xl font-light text-gray-700 leading-relaxed max-w-md">
          I’m actively interviewing for entry-level Software Developer and Full-Stack AI roles. If you’re looking for a developer who can bridge the gap between complex backend logic and clean frontend design, let's connect.
        </p>
      </div>

      <div id="Contact-Form-Container" className="w-full md:w-1/2 flex md:justify-end">
        <ContactForm />
      </div>
    </section>

    </main>
  );
}
