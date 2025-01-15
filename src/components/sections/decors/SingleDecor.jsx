const SingleDecor = ({ imgSrc }) => {
  return (
    <div className="decor col-span-1 w-full h-52 overflow-hidden py-12 bg-globalColor1">
      <div className="img">
        <img
          src={imgSrc}
          alt="image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SingleDecor;
