import { motion } from "framer-motion";

const SingelActivity = ({ imgSrc, imgAlt, title, desc }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.25 }}
      className="service lg:col-span-1 min-h-36 transparent text-globalColor5  p-3 shadow-sm rounded-md hover:bg-inherit lg:hover:scale-x-110 hover:scale-105 transition hover:shadow-2xl"
    >
      {/* Img */}
      <div className="h-3/6 p-1.5 group-hover:bg-globalColor1">
        {" "}
        <img className="object-cover h-full w-full" src={imgSrc} alt={imgAlt} />
      </div>
      {/* Text */}
      <div className="flex flex-col justify-between md:h-2/6 md:-gap-0 gap-6">
        <h2 className="text-2xl mt-3">{title}</h2>
        <p className="text-globalColor4 font-light">{desc}</p>
      </div>
    </motion.div>
  );
};

export default SingelActivity;
