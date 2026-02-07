
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle, ChevronLeft, ChevronRight, Download, Users } from "lucide-react";
import logo from "../assets/logo11.png"
import ContactForm from "./Contact";

const SLIDES = [
  {
    id: 1,
    subtitle: "Promising On Time",
    lang: "الأسلاك الكهربائية",
    title: "Electrical wiring",
    image: "https://detricaelectromechanical.com/assets/img/service/Commercial-electrical-works.jpg",
  },
  {
    id: 2,
    subtitle: "Our Team",
    lang: "التركيبات الكهربائية",
    title: "Electrical Installation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDk6I2Ka1pEPUsr8GWTnAyQXJGReW5GYuB5Q&s",
  },
  {
    id: 3,
    subtitle: "Our Mission",
    lang: "تركيب الأدوات الصحية",
    title: "Sanitary ware installation",
    image: "https://content.jdmagicbox.com/v2/comp/pune/n9/020pxx20.xx20.250702115652.b8n9/catalogue/pooja-sanitaryware-dhanori-pune-sanitaryware-dealers-xemw54ysg5.jpg",
  },
];

const TEAM_MEMBERS = [
  { role: "General Manager", name: "Razmi Shaikh Khat" },
  { role: "Project Manager", name: "Murali Muthu" },
  { role: "Administration Manager", name: "Govindaraj" },
  { role: "Electrical Supervisor", name: "Udaya Kumar" },
];

const SERVICES = [
  { name: "Electrical Wiring", icon: "⚡" },
  { name: "Electrical Installations", icon: "💡" },
  { name: "Sanitary Ware Installation", icon: "🚿" },
  { name: "Plots & Villas Work", icon: "🏠" },
  { name: "Electrical Extension", icon: "🔌" },
  { name: "Sanitary Extension", icon: "🚰" },
  { name: "Maintenance Contracts", icon: "🛠️" },
];
export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={SLIDES[index].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={SLIDES[index].image}
              alt={SLIDES[index].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <motion.p
                className="text-xl md:text-2xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {SLIDES[index].subtitle}
              </motion.p>
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {SLIDES[index].title}
              </motion.h2>
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {SLIDES[index].lang}
              </motion.h2>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow z-10">
          <ChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow z-10">
          <ChevronRight />
        </button>

        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 bg-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Kuwait Indo Logo" className="w-32 h-32 object-contain" />
          </div>
          <h2 className="text-xl font-semibold mb-2">شركة التركيبات الكهربائية السريعة</h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Quick Electrical Installations Company</h1>
          <p className="text-red-600 italic text-lg font-serif mb-8">“We do!!! Only our Best!!!”</p>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Electrical work encompasses all tasks related to the installation, maintenance, and extension of electrical systems...
          </p>
          <p className="text-gray-700 text-base leading-relaxed font-semibold">
            Registered by Kuwait Commerce Dept. under license # 12313/2025 (Valid until 1/8/2029).
          </p>
        </div>
      </section>

      {/* Mission, Values, Promises */}
      <section className="w-full py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Deliver <strong>safe and reliable</strong> solutions.</li>
              <li>Provide <strong>high-quality workmanship</strong>.</li>
              <li>Uphold the <strong>highest safety standards</strong>.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-700"><strong>Integrity, Quality & Safety</strong> – We prioritize honesty and excellence in every project.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Promises</h2>
            <p className="text-gray-700">Satisfaction of our clients is vital for our future business relations.</p>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="text-gray-500 mt-2">
              Quality solutions you can trust
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center justify-center text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">
                  {service.icon}
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  {service.name}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* --- NEW TEAM SECTION --- */}
      <section className="w-full py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Users className="text-red-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-gray-900">Our Professional Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <p className="text-red-600 text-sm font-bold uppercase tracking-wider mb-1">
                  {member.role}
                </p>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ----------------------- */}

      <ContactForm />
    </div>
  );
}