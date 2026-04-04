import { useState } from "react";

export default function DecayCard({ src, className = "" }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * 20;
    const rotateY = (x / width - 0.5) * -20;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
    });
  };

  const handleLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={style}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover rounded-2xl shadow-xl"
      />
    </div>
  );
}
