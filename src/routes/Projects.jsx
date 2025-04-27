import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MainTitle from "../components/minicomponents/MainTitle.jsx";
import MotionContext from "../context/MotionContext.jsx";
import { useContext } from "react";

const ProjectCard = ({ title, items }) => {
  const { containerVariants, itemVariants } = useContext(MotionContext);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 my-4 w-full md:w-80 lg:w-96"
      variants={containerVariants}
      viewport={{ amount: 0.5 }}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <ul className="list-disc ml-6 text-globalColor0">
        {items.map((item, index) => (
          <motion.li key={index} variants={itemVariants} className="mb-1">
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation("projects");

  const projectData = [
    {
      title: "MOI",
      items: [
        "Building_S07",
        "Ancillary Building _ S07",
        "Mosques _ S07",
        "Mosque Doors_S07",
        "Building_S03 wooden doors",
        "Wooden Carved Massive Teak Wood_S11",
        "Building _S15 wooden doors",
        "Ancillar Building_S15 wooden doors",
        "Villa VIP Building_S15 wooden doors",
        "Mosque Doors_S15",
      ],
    },
    {
      title: "NHC",
      items: ["Wooden Internal doors"],
    },
    {
      title: t("otherProjects"),
      items: [
        "Al-Hatamen Project in Al-Marwa District",
        "Al-Haramain Villa Project",
        "Habib Trading Company Project",
        "Ragi Al-Insha Estate Development Project",
        "King's Road Villa Project",
      ],
    },
  ];

  return (
    <div className="bg-globalColor4 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-globalColor2 my-3 text-4xl">
          <MainTitle title={t("title")} />
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              items={project.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
