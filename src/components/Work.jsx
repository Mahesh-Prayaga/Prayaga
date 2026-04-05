import { useState } from "react";
import BlurText from "./TextAnimation";
import hackathonImg from "../assets/hackathon.png";
import portfolioImg from "../assets/portfolio.png";
import GlareHover from "./GlareHover";

export default function Work() {
  const [activeSkill, setActiveSkill] = useState("Skills");

  const skills = [
    "Skills",
    "React.js",
    "Node.js + Express",
    "MongoDB",
    "TailwindCSS",
    "Git & GitHub",
    "REST APIs",
  ];

  const projects = [
    {
      id: 1,
      title: "GIT-A-THON",
      subtitle:
        "Built with Next.js and Supabase. Led my team to create an event discovery and registration platform for the hackathon.",
      image: hackathonImg,
      tags: ["UI/UX", "Web Design"],
      liveUrl: "https://git-a-thon-2025.vercel.app/",
      repoUrl: "https://github.com/github-community-gitam/git-a-thon-2025",
    },
    {
      id: 2,
      title: "Portfolio Website",
      subtitle:
        "Built with React + Vite + TailwindCSS. Modern, interactive portfolio showcasing my work and experience.",
      image: portfolioImg,
      tags: ["UI/UX", "Web Design"],
      liveUrl: "https://example.com/kotg",
      repoUrl: "https://github.com/Mahesh-Prayaga/Prayaga",
    },
  ];

  return (
    <div className="relative z-20 bg-white text-black min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 py-16 sm:py-20 md:py-32">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <BlurText
          text="Projects"
          delay={200}
          animateBy="words"
          direction="bottom"
          className="font-instrument font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6"
        >
          Work
        </BlurText>

        {/* Divider Line */}
        <div className="w-full h-px bg-black/20 mb-12"></div>

        {/* Skills Filter */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-4 mb-12 scrollbar-hide">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setActiveSkill(skill)}
              className={`px-4 sm:px-5 md:px-6 py-2 md:py-2.5 rounded-full whitespace-nowrap text-xs sm:text-sm md:text-base font-medium transition-all ${
                activeSkill === skill
                  ? "bg-black text-white"
                  : "bg-white text-black border border-black/30 hover:border-black"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Project Image Container */}
              <div className="relative mb-4 rounded-2xl overflow-hidden bg-gray-200 aspect-video sm:aspect-square md:aspect-auto md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover Overlay with Buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.id === 2 ? (
                    <button
                      disabled
                      className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-black rounded-lg font-medium transition-colors text-xs sm:text-sm group/live"
                    >
                      <span className="inline-block transition-all duration-300 opacity-100 group-hover/live:opacity-0 group-hover/live:hidden">
                        Live →
                      </span>
                      <span className="hidden transition-all duration-300 opacity-0 group-hover/live:opacity-100 group-hover/live:inline">
                        You are looking at it :)
                      </span>
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                    >
                      Live →
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 sm:py-2.5 bg-black/50 border border-white text-white rounded-lg font-medium hover:bg-black transition-colors text-xs sm:text-sm"
                  >
                    Repo
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-2">
                <h3 className="font-instrument font-bold text-xl sm:text-2xl md:text-3xl group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
