import { Link } from "react-router-dom";

const SingelActivity = ({ imgSrc, imgAlt, title, desc, sercivePath }) => {
  return (
    <div className="service lg:col-span-1 min-h-36 transparent text-globalColor5  p-3 shadow-sm rounded-md hover:bg-inherit lg:hover:scale-x-110 hover:scale-105 transition hover:shadow-2xl">
      {/* Img */}
      <div className="h-3/6 p-1.5 group-hover:bg-globalColor1">
        {" "}
        <img className="object-cover h-full w-full" src={imgSrc} alt={imgAlt} />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl mt-3">{title}</h2>
        <p className="text-globalColor4 font-light">{desc}</p>
        <Link
          to={`/${sercivePath}`}
          className="rounded-sm border border-t-emerald-50 w-fit px-3 py-1 text-xl hover:bg-white hover:text-globalColor0 hover:border-globalColor0 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default SingelActivity;