const Reason = ({ icon, title, desc }) => {
  return (
    <div className="col-span-1 flex flex-col hover:shadow-xl py-16 bg-white border border-globalColor4 w-full text-center hover:scale-90 gap-6 text-globalColor0 transition">
      <div className="mx-auto text-3xl">{icon}</div>
      <h3 className="text-2xl ">{title}</h3>
      <p className="text-md mx-auto max-w-48 text-wrap">{desc}</p>
    </div>
  );
};

export default Reason;
