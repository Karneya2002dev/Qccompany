// src/components/AboutSection.jsx
import logo from "../assets/logo11.png"
export default function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={logo}
          alt="About Kuwait Indo"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a professional electrical services company dedicated to delivering high-quality solutions for residential, commercial, and industrial projects. Our expertise spans complete electrical installations, maintenance, and extensions, including fire alarm systems, low-voltage networks such as CCTV and telephone systems, and lighting solutions with all necessary accessories.
Our team consists of highly skilled engineers and technicians committed to executing projects with precision, safety, and efficiency. We ensure that every project is completed according to detailed drawings, schedules, and the highest industry standards. Customer satisfaction is our top priority, and we strive to deliver reliable, durable, and innovative electrical solutions that meet your specific needs.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Our mission is to deliver on-time services, maintain customer
            satisfaction, and continue being the most trusted partner for
            industrial solutions.
          </p>
          
        </div>
      </div>
    </section>
  );
}
