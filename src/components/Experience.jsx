import BlurText from "./TextAnimation";
import GlareHover from "./GlareHover";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "GitHub Club GITAM",
      position: "Web Development Domain Lead",
      duration: "Sept 2024 - Present",
      description:
        "Led technical workshops and helped organize development activities, guiding team members and working with different teams.",
      type: "Voluntary",
      location: "Visakhapatnam, India",
      skills: [
        "Web Development",
        "Leadership",
        "Workshop Design",
        "Event Management",
      ],
    },
    {
      id: 2,
      company: "Calarit",
      position: "Summer Intern",
      duration: "May 2025 - June 2025",
      description:
        "Worked on designing and implementing secure APIs for mobile service authentication, incorporating multi-factor verification across users, devices, applications, and transactions.",
      type: "Full-time",
      location: "Visakhapatnam, India",
      skills: [
        "API Design",
        "Authentication Systems",
        "Android Studio",
        "Backend",
      ],
    },
  ];

  return (
    <div
      id="exp"
      className="relative z-20 bg-black text-white min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 py-16 sm:py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <BlurText
          text="Experience"
          delay={200}
          animateBy="words"
          direction="bottom"
          className="font-instrument font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6"
        />

        <div className="w-full h-px bg-white/20 mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-0 top-6">
                <div className="w-4 h-4 bg-white rounded-full border-4 border-black"></div>

                {index !== experiences.length - 1 && (
                  <div className="absolute left-1.5 top-8 w-0.5 h-28 bg-white/20"></div>
                )}
              </div>

              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={700}
                className="md:ml-12 rounded-xl"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 md:p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-instrument font-bold text-xl sm:text-2xl md:text-3xl">
                        {exp.position}
                      </h3>

                      <p className="text-gray-400 mt-1">{exp.company}</p>
                    </div>

                    {/* 🔥 FIXED BADGE */}
                    <span className="self-start w-fit px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-200 backdrop-blur-md">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} className="text-gray-400" />
                      <span>{exp.duration}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-gray-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
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
              </GlareHover>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-4">
            Want to know more about my journey?
          </p>

          <a
            href="/resume.pdf"
            download="Mahesh_Prayaga_Resume.pdf"
            className="inline-block px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Download Resume →
          </a>
        </div>
      </div>
    </div>
  );
}
