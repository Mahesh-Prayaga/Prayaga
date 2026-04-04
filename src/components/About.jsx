import BlurText from "./TextAnimation";

export default function About() {
  return (
    <div className="relative z-20 bg-black text-white min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-24 md:py-32">
      {/* 🔥 GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-8 md:gap-20 items-start">
        {/* LEFT */}

        <BlurText
          text="About"
          delay={1000}
          animateBy="words"
          direction="bottom"
          className="font-instrument font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tight -ml-2 sm:-ml-4 md:-ml-9"
        >
          About
        </BlurText>

        {/* RIGHT */}
        <div className="max-w-none">
          <BlurText
            className="font-dm font-bold text-base sm:text-lg md:text-[20px] leading-[1.5] text-white-700"
            text="I’m a Computer Science undergraduate at GITAM University, Visakhapatnam, with a strong interest in full-stack web development. I work primarily with the MERN stack and enjoy building applications that are clean, scalable, and genuinely easy to use."
            delay={50}
            animateBy="words"
            direction="bottom"
          />
          <br></br>
          <BlurText
            className="font-dm font-bold text-base sm:text-lg md:text-[20px] leading-[1.5] text-grey-400"
            text="As the Web Development Domain Lead at the GitHub Club GITAM, I’ve led technical events and workshops, creating opportunities for people to learn and build together. I’ve also led a team to develop a hackathon website, where I handled both coordination and development under tight timelines."
            delay={80}
            animateBy="words"
            direction="bottom"
          />
          <br></br>
          <BlurText
            className="font-dm font-bold text-base sm:text-lg md:text-[20px] leading-[1.5] text-grey-400"
            text="I’m someone who enjoys building consistently and improving with every project, and I’m currently looking for internship opportunities where i can contribute to real-world products and grow as a developer."
            delay={120}
            animateBy="words"
            direction="bottom"
          />
          {/* BUTTON */}
          <button className="mt-6 sm:mt-7 md:mt-8 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white text-black rounded-lg text-xs sm:text-sm font-medium">
            Contact Him →
          </button>
        </div>
      </div>
    </div>
  );
}
