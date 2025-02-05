// import { useTranslation } from "react-i18next";
// import SingleProject from "../components/projects/SingleProject";

// const images = import.meta.glob(
//   "../assets/images/projects/*.{png,jpg,jpeg,webp}",
//   { eager: true }
// );

// const projectImgs = Object.values(images).map((img) => img.default);

// const Projects = () => {
//   const { t } = useTranslation("projects");

//   const projectData = projectImgs.map((project, index) => ({ // Directly map projectImgs
//     image: project,
//     titleKey: `title${index}`, // No need for t() here, translate in the component
//     descriptionKey: `desc${index}`, // Same here
//   }));

//   return (
//     <section className="py-12 bg-gray-100 min-h-screen">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           {t("title")}
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projectData.map((project, index) => (
//             <SingleProject
//               key={index}
//               imgSrc={project.image}
//               title={t(project.titleKey)} // Translate here!
//               description={t(project.descriptionKey)} // Translate here!
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MainTitle from "../components/minicomponents/MainTitle.jsx";

const ProjectCard = ({ title, items }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 my-4 w-full md:w-80 lg:w-96"
      variants={containerVariants}
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
      title: "NUC",
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
        <div className="text-white my-3 text-4xl">
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
