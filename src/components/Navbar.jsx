import profile from "../assets/profile.webp";
import { lenis } from "../main"; // adjust path if needed

export default function Navbar() {
  const scrollTo = (target) => {
    lenis.scrollTo(target, {
      offset: -100, // adjust based on navbar height
      duration: 1.2,
    });
  };

  return (
    <div
      id="navbar"
      className="fixed top-2 sm:top-4 left-2 sm:left-6 right-2 sm:right-6 flex justify-between items-center px-4 sm:px-6 md:px-9 py-3 sm:py-4 md:py-5 z-50 bg-[#d9d9d9]/60 backdrop-blur-sm border border-black/10 rounded-xl sm:rounded-2xl shadow-sm"
    >
      {/* Left (Profile Image) */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-black/20">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right */}
      <div className="flex gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium">
        <button onClick={() => scrollTo("#about")}>ABOUT</button>
        <button onClick={() => scrollTo("#work")}>PROJECTS</button>
        <button onClick={() => scrollTo("#exp")}>EXPERIENCE</button>
        <button onClick={() => scrollTo("#contact")}>CONTACT</button>
      </div>
    </div>
  );
}
