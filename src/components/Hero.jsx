import nameImg from "../assets/heroText.png";
import rightImg from "../assets/hero1.png";
import leftImg from "../assets/hero2.webp";
import DecayCard from "./cardAnimation";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [scale, setScale] = useState(1);

  const targetScale = useRef(1);
  const currentScale = useRef(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // target value (what we WANT)
      targetScale.current = Math.min(1 + scrollY * 0.00025, 1.1);
    };

    window.addEventListener("scroll", handleScroll);

    // 🔥 smooth animation loop
    const animate = () => {
      // lerp (smoothly move current → target)
      currentScale.current +=
        (targetScale.current - currentScale.current) * 0.08;

      setScale(currentScale.current);

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sticky top-0 h-screen w-full bg-[#ebebeb] animate-move-lines flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, #dcdcdc 0.8px, transparent 0.5px)`,
        backgroundSize: "18px 100%",
      }}
    >
      {/* 🔹 TOP BADGE - Desktop Position */}
      <div className="hidden sm:flex absolute top-28 flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm border border-black/5 top-1/4 left-[40%]">
        {/* blinking dot */}
        <span className="relative flex h-2 sm:h-3 w-2 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
        </span>

        <p className="text-xs sm:text-sm font-medium text-gray-700">
          Open for Internship Opportunities
        </p>
      </div>

      {/* 🔥 MAIN CONTENT - Desktop Layout */}
      <div className="hidden sm:flex items-center justify-center gap-4 sm:gap-8 md:gap-16 w-full max-w-6xl px-4 sm:px-6 md:px-10">
        <DecayCard
          src={leftImg}
          className="w-20 sm:w-32 md:w-[280px] opacity-80 -translate-y-3 sm:-translate-y-6"
        />

        <img
          src={nameImg}
          alt="Mahesh Prayaga"
          style={{ transform: `scale(${scale})` }}
          className="w-32 sm:w-64 md:w-[420px] object-contain transition-transform duration-200"
        />

        <DecayCard
          src={rightImg}
          className="w-24 sm:w-36 md:w-[320px] opacity-90 translate-y-3 sm:translate-y-6"
        />
      </div>

      {/* 🔹 BOTTOM TEXT - Desktop Position */}
      <p className="hidden sm:block font-gothic absolute left-[38%] bottom-[25%] tracking-wider text-xs sm:text-sm md:text-xl text-700">
        Aspiring Full-stack Web Developer
      </p>

      {/* 📱 MOBILE LAYOUT - Vertical Stack */}
      <div className="sm:hidden flex flex-col items-center justify-center gap-1 w-full px-3 pt-12">
        {/* Badge for Mobile */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
          </span>
          <p className="text-xs font-medium text-gray-700">
            Open for Internship Opportunities
          </p>
        </div>

        {/* Right Image for Mobile */}
        <DecayCard src={rightImg} className="w-72 opacity-90" />

        {/* Name for Mobile */}
        <img
          src={nameImg}
          alt="Mahesh Prayaga"
          className="w-80 object-contain"
        />

        {/* Aspiring Text for Mobile */}
        <p className="font-gothic tracking-wider text-base text-700 text-center -mt-8">
          Aspiring Full-stack Web Developer
        </p>
      </div>
    </div>
  );
}
