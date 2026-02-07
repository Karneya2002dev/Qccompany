// components/ProjectCard.jsx
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  if (!project) return null; // ⛑ safety

  const { id, location, title, images = [] } = project;

  return (
    <Link to={`/projects/${id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        
        {/* Safe image access */}
        <img
          src={images[0] || "/placeholder.jpg"}
          alt={title}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            View Project →
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
