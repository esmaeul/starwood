import srcImg1 from "../../assets/images/trusted/1.jpg";

const TrustedSection = () => {
  return (
    <div className="section bg-globalColor1 min-h-52">
      <div className="container grid grid-cols-5 gap-16 py-16">
        <div className="col-span-2">
          <h1 className="text-6xl font-bold text-globalColor0 font-mono">شركاء النجاح</h1>
        </div>
        <div className="col-span-1">
          <img src={srcImg1} alt="" className="w-20 h-20 object-cover" />
        </div>
        <div className="col-span-1">
          <img src={srcImg1} alt="" className="w-20 h-20 object-cover" />
        </div>
        <div className="col-span-1">
          <img src={srcImg1} alt="" className="w-20 h-20 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
