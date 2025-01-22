const MainTitle = ({ title }) => {
  return (
    <h1 className="relative w-fit mx-auto font-extralight text-3xl text-inherit group">
      {title}
      {/* Ball */}
      <span className="absolute translate-y-1/2 left-0 bottom-0 group-hover:left-[96%] w-5 h-5 bg-gradient-to-t from-globalColor0 to-globalColor6 z-10 opacity-35 rounded-full duration-700"></span>
    </h1>
  );
};

export default MainTitle;
