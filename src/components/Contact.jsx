import { useState } from "react";
import BlurText from "./TextAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: "📧",
      label: "Email",
      value: "mahesh@prayaga.dev",
      link: "mailto:mahesh@prayaga.dev",
    },
    {
      id: 2,
      icon: "💼",
      label: "LinkedIn",
      value: "Mahesh Prayaga",
      link: "https://linkedin.com/in/maheshprayaga",
    },
    {
      id: 3,
      icon: "🐙",
      label: "GitHub",
      value: "@maheshprayaga",
      link: "https://github.com/maheshprayaga",
    },
    {
      id: 4,
      icon: "🐦",
      label: "Twitter",
      value: "@maheshprayaga",
      link: "https://twitter.com/maheshprayaga",
    },
  ];

  return (
    <div className="relative z-20 bg-white text-black min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 py-16 sm:py-20 md:py-32">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <BlurText
          text="Contact"
          delay={200}
          animateBy="words"
          direction="bottom"
          className="font-instrument font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6"
        >
          Contact
        </BlurText>

        {/* Divider Line */}
        <div className="w-full h-px bg-black/20 mb-12"></div>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-12 max-w-2xl">
          Have a project in mind? Let's collaborate! Whether you want to discuss
          a new design challenge or just want to say hi, feel free to reach out.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Left - Contact Information */}
          <div className="md:col-span-1">
            <h3 className="font-instrument font-bold text-2xl sm:text-3xl mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl">{info.icon}</div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm sm:text-base font-medium group-hover:text-blue-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-xs sm:text-sm text-gray-500 font-medium mb-4">
                Follow me on
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/maheshprayaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://github.com/maheshprayaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm"
                  aria-label="GitHub"
                >
                  GH
                </a>
                <a
                  href="https://twitter.com/maheshprayaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-blue-400 transition-colors text-xs font-bold"
                  aria-label="Twitter"
                >
                  𝕏
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="md:col-span-2">
            <h3 className="font-instrument font-bold text-2xl sm:text-3xl mb-8">
              Send me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me more about your project..."
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              {/* Status Message */}
              {status && (
                <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm sm:text-base">
                  {status}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-3.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                Send Message →
              </button>

              <p className="text-xs sm:text-sm text-gray-500">
                I'll get back to you as soon as possible!
              </p>
            </form>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Didn't find what you're looking for?
            </p>
            <a
              href="https://calendly.com/maheshprayaga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
