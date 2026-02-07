import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./ProjectData";
import { ArrowLeft, MapPin, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">Project Not Found</h2>
        <p className="text-gray-500 mt-2">The project you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all">
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-white pb-20"
    >
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium hidden sm:inline">Back to Projects</span>
            <span className="font-medium sm:hidden">Back</span>
          </Link>
          <a 
            href={project.mapUrl} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-all active:scale-95"
          >
            View on Map <ExternalLink size={14} />
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-12">
        {/* Project Header */}
        <header className="mb-8 md:mb-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-blue-600 mb-2 md:mb-3">
              <MapPin size={16} />
              <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">Project Location</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              {project.title}
            </h1>
          </motion.div>
        </header>

        {/* Responsive Bento-style Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] gap-3 md:gap-4">
          {project.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100
                ${index === 0 ? "col-span-2 row-span-2" : ""} 
                ${index === 1 ? "col-span-2 row-span-1" : ""}
                ${index % 5 === 4 ? "md:col-span-2" : "col-span-1"}
              `}
            >
              <img
                src={img}
                alt={`Project image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <section className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
          <div className="lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">About the Project</h3>
            <p className="text-gray-600 text-base md:text-lg leading-[1.7] md:leading-[1.8] whitespace-pre-line">
              {project.description || "No description provided for this project."}
            </p>
          </div>

          <aside>
            <div className="bg-gray-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] lg:sticky lg:top-28">
              <h4 className="font-bold text-lg mb-4 md:mb-6">Details</h4>
              <dl className="space-y-4 md:space-y-6">
                {[
                  { label: "Status", value: project.status || "Completed" },
                  { label: "Year", value: project.year || "2025" },
                  { label: "Category", value: project.category || "Residential" }
                ].map((detail, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <dt className="text-gray-500 text-xs md:text-sm">{detail.label}</dt>
                    <dd className="font-semibold text-gray-900 text-sm md:text-base">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </section>
      </main>
    </motion.div>
  );
};

export default ProjectDetail;