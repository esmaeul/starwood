import { motion } from "framer-motion";

const Reason = ({ icon, title, desc }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.25 }}
      className="col-span-1 flex flex-col hover:shadow-xl py-16 bg-white border border-globalColor4 w-full text-center hover:scale-90 gap-6 text-globalColor0 transition"
    >
      <div className="mx-auto text-3xl">{icon}</div>
      <h3 className="text-2xl ">{title}</h3>
      <p className="text-md mx-auto max-w-48 text-wrap">{desc}</p>
    </motion.div>
  );
};

export default Reason;
