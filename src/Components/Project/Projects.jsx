import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectData";

const Projects = () => {
  // Container variants for "Staggering" the children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
         Our Works
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of projects where I've blended design and engineering.
        </p>
      </div>

      {/* Animated Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Animates when 10% of grid is visible
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <div className="group transition-transform duration-300 hover:-translate-y-2">
              <ProjectCard project={project} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;