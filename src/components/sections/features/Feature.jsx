const Feature = ({ value, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 p-5">
      <h1 className="text-6xl font-semibold">+{value}</h1>
      <p className="text-md pl-6 font-light">{desc}</p>
    </div>
  );
};

export default Feature;
