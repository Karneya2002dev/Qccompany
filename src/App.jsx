import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Hero from './Components/Hero'
import AboutSection from './Components/About'

import Footer from './Components/Footer'
import ContactForm from './Components/Contact'
import ScrollToTop from './Components/Scroll'
import Projects from './Components/Project/Projects'
import ProjectDetail from './Components/Project/ProjectDetails'
import ServicesPage from './Components/Service'
import ServiceDetail from './Components/ServiceDetails'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<AboutSection />} />
        <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App