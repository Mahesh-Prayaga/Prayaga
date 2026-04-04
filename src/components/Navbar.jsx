export default function Navbar() {
  return (
    <div className="fixed top-2 sm:top-4 left-2 sm:left-6 right-2 sm:right-6 flex justify-between items-center px-4 sm:px-6 md:px-9 py-3 sm:py-4 md:py-5 z-50 bg-[#d9d9d9]/60 background-blur-sm border border-black/10 rounded-xl sm:rounded-2xl shadow-sm">
      {" "}
      {/* Left */}
      <h1 className="text-xs sm:text-sm font-semibold tracking-wide">P</h1>
      {/* Right */}
      <div className="flex gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium">
        <a href="#">ABOUT</a>
        <a href="#">WORK</a>
        <a href="#">CONTACT</a>
      </div>
    </div>
  );
}
