const MainTitle = ({ title }) => {
  return (
    <h1 className="relative w-fit mx-auto lg:text-7xl md:text-5xl text-3xl mb-10 text-inherit group">
      {title}
      {/* Ball */}
      {/* <span className="absolute translate-y-1/2 left-0 bottom-0 group-hover:left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-globalColor0 to-globalColor6 z-10 opacity-35 rounded-full duration-700"></span> */}
    </h1>
  );
};

export default MainTitle;
