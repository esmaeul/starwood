const SingleDecor = ({ imgSrc }) => {
  return (
    <div className="decor col-span-1 w-full h-60 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
      <div className="img w-full h-full">
        <img src={imgSrc} alt="Decor" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SingleDecor;
