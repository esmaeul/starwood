import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const SingleProject = ({ imgSrc, index, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105">
      <img
        src={imgSrc}
        alt={`project ${index}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 capitalize">
            {title}
          </h3>
          <button onClick={toggleExpand} className="focus:outline-none">
            {isExpanded ? (
              <FaPlus className="text-gray-600 h-5 w-5" />
            ) : (
              <FaMinus className="text-gray-600 h-5 w-5" />
            )}
          </button>
        </div>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-full" : "max-h-0"
          }`}
        >
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
