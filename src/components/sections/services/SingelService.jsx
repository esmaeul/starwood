import { Link } from "react-router-dom";

const SingelService = ({ imgSrc, imgAlt, title, desc, sercivePath }) => {
  return (
    <div className="service lg:col-span-1 min-h-36 bg-globalColor2 text-globalColor5  p-3 shadow-sm rounded-sm">
      <div className="img h-3/6 p-1.5 overflow-hidden bg-white">
        {" "}
        <img className="object-cover h-full w-full" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="flex flex-col gap-6">
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link to={`/${sercivePath}`}>Read More</Link>
      </div>
    </div>
  );
};

export default SingelService;
