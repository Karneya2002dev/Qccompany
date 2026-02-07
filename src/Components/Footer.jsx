
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo11.png";
import { motion } from "framer-motion";

export default function Footer() {
  const text = "Yaaraa Technologies";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingForward) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) setTypingForward(false);
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setTypingForward(true);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [index, typingForward]);

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-white mb-4 text-lg">
            Quick Electrical Installations Company
          </h3>
          <img src={logo} alt="Company Logo" className="h-28 w-28 mb-4 mx-auto" />
          <p className="text-sm leading-relaxed text-center md:text-left">
            We provide professional electrical services, including wiring,
            lighting, fire alarms, and low-voltage systems, with a focus on
            safety, quality, and customer satisfaction.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-white mb-4">Our Team</h3>
          <p><strong>General Manager:</strong> Razmi Shaikh Khat</p>
          <p><strong>Project Manager:</strong> Murali Muthu</p>
          <p><strong>Administration Manager:</strong> Govindaraj</p>
          <p><strong>Electrical Supervisor:</strong> Udaya Kumar</p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <p className="mb-2">
            📞 Phone:{" "}
            <a href="tel:+96599693670" className="hover:text-indigo-400">
              (+965) 99693670
            </a>
          </p>
          <p className="mb-2">
            📧 Email:{" "}
            <a href="mailto:qcompany877@gmail.com" className="hover:text-indigo-400">
              qcompany877@gmail.com
            </a>
          </p>
          <address className="not-italic text-sm leading-relaxed">
            Manqaf-Block-Bldg No 54280 <br />
            Ground floor - Office No 26
          </address>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.div
        className="mt-8 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p>© {new Date().getFullYear()} Quick Electrical Installations Company</p>
        <hr className="my-2 border-gray-700" />

        <h1 className="text-lg font-bold flex justify-center items-center">
          Developed by
          <span className="ml-2 text-indigo-400 border-r-2 border-indigo-400 pr-1">
            {displayedText}
          </span>
        </h1>
      </motion.div>
    </footer>
  );
}
