// src/components/Header.jsx
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo11.png";
import iso from "../assets/ISO.jpeg";
import iaf from "../assets/iaf.png"
import bqc from "../assets/bqc.png"
import ias from "../assets/ias.png"


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);






  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      {/* Desktop Top Strip */}
      <div className="bg-gray-50 text-sm text-gray-700 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <span className="font-medium text-gray-800">
            ISO 9001:2015 Certified Company
          </span>
          <div className="flex items-center gap-4">
            <a href="tel:+96599693670" className="hover:underline">
              (+965) 99693670
            </a>
            <a href="mailto:qcompany877@gmail.com" className="hover:underline">
              qcompany877@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Logo & Certification */}
      <div className="w-full bg-white shadow-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-6">
          {/* Logo & Company Name */}
          <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:space-x-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-blue-900">
                Quick Electrical Installations Company
              </h1>
              <span className="text-sm text-gray-600">
                شركة التركيبات الكهربائية السريعة
              </span>
            </div>
          </div>
          {/* Certification Logos */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <img src={iso} alt="ISO" className="h-12" />
            <img src={ias} alt="ISO" className="h-12" />
            <img src={iaf} alt="ISO" className="h-12" />
            <img src={bqc} alt="ISO" className="h-12" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo for Mobile */}
          <Link to="/" className="flex items-center gap-3 lg:hidden">
            <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center">
              <img
                src={logo}
                alt="Kuwait Indo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">
                Quick
              </h1>
              <span className="text-sm text-gray-600">
                السريعة
              </span></div>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden w-full lg:flex justify-center items-center gap-12 bg-red-500 px-4 py-2 relative">
            <Link
              to="/"
              className="py-2 text-white hover:text-blue-200 transition font-medium"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="py-2 text-white hover:text-blue-200 transition font-medium"
            >
              About Us
            </Link>

            {/* Products dropdown (desktop) */}


            <Link
              to="/services"
              className="py-2 text-white hover:text-blue-200 transition font-medium"
            >
              Services
            </Link>
            <Link
              to="/project"
              className="py-2 text-white hover:text-blue-200 transition font-medium"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="py-2 text-white hover:text-blue-200 transition font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md border"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white z-40">
          {/* Logo & Company Name */}
          <div className="px-4 py-4 border-b flex flex-col items-center">
            <img src={logo} alt="Logo" className="h-12 mb-2" />
            <h1 className="text-lg font-bold text-red-600 text-center">
              Quick Electrical Installations Company
            </h1>
            <span className="text-sm text-gray-600 text-center">
              شركة التركيبات الكهربائية السريعة
            </span>
          </div>

          {/* Mobile menu links */}
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="block py-2" onClick={() => setMobileOpen((v) => !v)}>
              Home
            </Link>
            <Link to="/About" className="block py-2" onClick={() => setMobileOpen((v) => !v)}>
              About Us
            </Link>
            <Link to="/services" className="block py-2" onClick={() => setMobileOpen((v) => !v)}>
              Services
            </Link>
            <Link to="/project" className="block py-2" onClick={() => setMobileOpen((v) => !v)}>
              Projects
            </Link>

            <Link to="/contact" className="block py-2" onClick={() => setMobileOpen((v) => !v)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// Helper to slugify text
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
