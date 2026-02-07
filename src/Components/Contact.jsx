import { useState } from "react";
import { User, Mail, MessageSquare, Phone, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // ✅ Replace with your Admin WhatsApp Number (with country code, no + or spaces)
      const adminNumber = "96599693670";

      const whatsappMessage = `Hello Sir/Madam,%0A
📌 New Contact Form Submission:%0A
👤 Name: ${formData.name}%0A
📞 Phone: ${formData.phone}%0A
📧 Email: ${formData.email}%0A
💬 Message: ${formData.message}`;

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/${adminNumber}?text=${whatsappMessage}`, "_blank");

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/20 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📩 Contact Us</h2>

      {submitted && (
        <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center shadow">
          ✅ Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <User className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full bg-transparent outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <Phone className="text-gray-400 mr-2" size={18} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full bg-transparent outline-none"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <Mail className="text-gray-400 mr-2" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-transparent outline-none"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Message</label>
          <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <MessageSquare className="text-gray-400 mr-2 mt-1" size={18} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              className="w-full bg-transparent outline-none resize-none"
            />
          </div>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          <Send size={18} /> Send Message
        </button>
      </form>
    </div>
  );
}
