import BlurText from "./TextAnimation";

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      label: "Email",
      value: "maheshprayaga09@gmail.com",
      link: "mailto:maheshprayaga09@gmail.com",
    },
    {
      id: 2,
      label: "LinkedIn",
      value: "Mahesh Prayaga",
      link: "https://www.linkedin.com/in/mahesh-prayaga-850475240/",
    },
    {
      id: 3,
      label: "GitHub",
      value: "Mahesh-Prayaga",
      link: "https://github.com/Mahesh-Prayaga",
    },
    {
      id: 4,
      label: "Instagram",
      value: "@maheshprayaga",
      link: "https://instagram.com/maheshprayaga",
    },
  ];

  return (
    <div
      id="contact"
      className="relative z-20 bg-white text-black min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 pt-20 md:pt-28 pb-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <BlurText
          text="Contact"
          delay={200}
          animateBy="words"
          direction="bottom"
          className="font-instrument font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6"
        />

        {/* Divider */}
        <div className="w-full h-px bg-black/20 mb-12"></div>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-16 max-w-2xl">
          Got something in mind or just want to connect? I’d love to hear from
          you.
        </p>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT — Contact Info */}
          <div>
            <h3 className="font-instrument font-bold text-2xl sm:text-3xl mb-8">
              Reach Out
            </h3>

            <div className="space-y-5">
              {contactInfo.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center border-b border-gray-200 py-4 transition-all hover:border-black"
                >
                  <span className="text-gray-500 text-sm sm:text-base">
                    {info.label}
                  </span>
                  <span className="font-medium text-sm sm:text-base group-hover:translate-x-1 transition-transform">
                    {info.value} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-20"></div>
        {/* Footer */}
        <div className="mt-50 pt-10 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Made with &lt;3 by Mahesh Prayaga
          </p>
        </div>
      </div>
    </div>
  );
}
