import BlurText from "./TextAnimation";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Deloitte Digital",
      position: "UX Designer",
      duration: "Nov 2022 - Present",
      duration_short: "1.5+ yrs",
      description:
        "Led end-to-end UX design for supply chain procurement tools. Designed interfaces for digital transformation projects impacting 500+ users across global teams.",
      type: "Full-time",
      location: "Hyderabad, India",
      skills: ["UI/UX Design", "User Research", "Figma", "Prototyping"],
    },
    {
      id: 2,
      company: "GitHub Club GITAM",
      position: "Web Development Domain Lead",
      duration: "Jun 2022 - Oct 2023",
      duration_short: "1.5 yrs",
      description:
        "Led technical workshops and events with 200+ members. Organized and developed hackathon website, coordinating cross-functional teams.",
      type: "Voluntary",
      location: "Visakhapatnam, India",
      skills: ["Web Development", "Leadership", "Workshop Design"],
    },
    {
      id: 3,
      company: "GITAM University",
      position: "Bachelor of Design (UX/UI Focus)",
      duration: "2020 - 2024",
      duration_short: "4 yrs",
      description:
        "Specialized in User Experience Design with highest CGPA in batch. Completed multiple design projects and received recognition for outstanding performance.",
      type: "Education",
      location: "Visakhapatnam, India",
      skills: ["UX Principles", "Design Thinking", "Research Methods"],
    },
  ];

  return (
    <div className="relative z-20 bg-black text-white min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 py-16 sm:py-20 md:py-32">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <BlurText
          text="Experience"
          delay={200}
          animateBy="words"
          direction="bottom"
          className="font-instrument font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6"
        >
          Experience
        </BlurText>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20 mb-12"></div>

        {/* Timeline Container */}
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Dot and Line */}
              <div className="hidden md:block absolute left-0 top-6">
                <div className="w-4 h-4 bg-white rounded-full border-4 border-black relative z-10"></div>
                {index !== experiences.length - 1 && (
                  <div className="absolute left-1.5 top-8 w-0.5 h-24 lg:h-32 bg-white/20"></div>
                )}
              </div>

              {/* Content Card */}
              <div className="md:ml-12 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-instrument font-bold text-xl sm:text-2xl md:text-3xl group-hover:text-blue-400 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Duration and Location */}
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📍</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-gray-300 mb-4">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-400 text-sm sm:text-base mb-4">
            Want to know more about my journey?
          </p>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
            Download Resume →
          </button>
        </div>
      </div>
    </div>
  );
}
