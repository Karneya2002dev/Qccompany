import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo11.png";
import { SERVICES } from "../Components/Data/ServiceData";

/* =========================
   DATA
========================= */
const CAPABILITIES = [
  { title: "Oil & Gas Industrial", icon: "🛢️" },
  { title: "Piping Works", icon: "🧵" },
  { title: "Infrastructure", icon: "🏗️" },
  { title: "Commercial", icon: "🏢" },
  { title: "Electro-Mechanical", icon: "⚙️" },
  { title: "Maintenance", icon: "🧑‍🔧" },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredServices = SERVICES.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ================= HERO ================= */}
        <section className="mb-24 text-center">
          <img src={logo} alt="Logo" className="h-32 mx-auto mb-8" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500"
          >
            PROTECTING YOUR ROI
          </motion.h1>

          <p className="text-slate-500 mt-3 uppercase tracking-widest text-sm">
            Turnkey Engineering Solutions
          </p>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </section>

        {/* ================= CAPABILITIES ================= */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Capabilities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CAPABILITIES.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-slate-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="text-sm font-bold text-blue-900">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= OPTIMIZATION ================= */}
        <section className="mb-28 rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 text-white p-12">
          <h2 className="text-4xl font-extrabold mb-4">
            Optimization <span className="text-cyan-400">of Assets</span>
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl">
            KRH delivers integrated facilities management ensuring maximum
            operational efficiency, compliance, and long-term asset value.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              "Airports & Mega Projects",
              "Commercial Buildings",
              "Medical Facilities",
              "Military Buildings",
              "Food Halls",
              "Residential Units",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-cyan-400">✔</span> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ================= SERVICES ================= */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Explore Our Services</h2>
            <p className="text-slate-500 mt-2">
              Tailored engineering excellence for every requirement
            </p>
          </div>

          {/* Search */}
          {/* <div className="max-w-md mx-auto mb-12">
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div> */}

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.slug}
                whileHover={{ scale: 1.03 }}
                className="group border rounded-2xl p-8 shadow-sm hover:shadow-2xl transition cursor-pointer"
                onClick={() => navigate(`/services/${service.slug}`)}
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-blue-50 flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                  {service.name}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-6 text-blue-600 font-semibold text-sm">
                  View Details →
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="mt-32 text-center bg-slate-50 rounded-3xl p-14">
          <h2 className="text-3xl font-extrabold mb-4">
            Need Expert Engineering Support?
          </h2>
          <p className="text-slate-600 mb-8">
            Speak with our specialists for reliable, compliant, and efficient
            solutions.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition"
          >
            Contact Us
          </button>
        </section>

      </div>
    </div>
  );
}
