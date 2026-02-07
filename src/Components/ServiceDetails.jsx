import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SERVICES } from "../Components/Data/ServiceData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = SERVICES.find((item) => item.slug === slug);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        <div className="text-center">
          <p className="text-2xl font-semibold mb-4">Service not found</p>
         {/* Back Arrow */}
<motion.button
  whileHover={{ x: -4 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate(-1)}
  className="flex items-center gap-2 text-blue-700 font-semibold mb-8 hover:text-blue-900"
>
  <span className="text-2xl">←</span>
  <span className="text-sm uppercase tracking-wide">Back</span>
</motion.button>

        </div>
      </div>
    );
  }

  /* =====================
     FORM HANDLERS
  ===================== */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = encodeURIComponent(
      `Hello Sir/Madam, *Service Enquiry* *Service:* ${service.name}👤 *Name:* ${formData.name} 📞 *Phone:* ${formData.phone}📧 *Email:* ${formData.email || "N/A"}📝 *Message:*${formData.message}`
    );

    window.open(
      `https://wa.me/96599693670?text=${whatsappMessage}`,
      "_blank"
    );

    setIsModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 font-semibold hover:underline"
        >
          ← Back
        </button>

        {/* Service Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-50 rounded-3xl shadow-xl p-10"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">{service.icon}</div>
            <h1 className="text-4xl font-black text-blue-900">
              {service.name}
            </h1>
          </div>

          <p className="text-slate-600 text-lg mb-4">
            {service.shortDescription}
          </p>

          <p className="text-slate-700 leading-relaxed mb-10">
            {service.description}
          </p>

          {/* Features */}
          {service.features?.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <span className="text-cyan-500 font-bold">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-transform active:scale-95"
            >
              📝 Enquire Now
            </button>

            <button
              onClick={() => navigate("/services")}
              className="border border-slate-300 px-8 py-3 rounded-lg font-semibold text-slate-700 hover:bg-slate-100"
            >
              View All Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* =====================
          ENQUIRY MODAL
      ===================== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
            >
              {/* Close */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-blue-900 mb-2">
                Service Enquiry
              </h2>
              <p className="text-slate-600 mb-6">
                {service.name}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-3"
                  onChange={handleChange}
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full border rounded-lg px-4 py-3"
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  className="w-full border rounded-lg px-4 py-3"
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border rounded-lg px-4 py-3"
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 rounded-lg font-bold shadow-md"
                >
                  📲 Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
