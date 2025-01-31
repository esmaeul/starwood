import { Link } from "react-router-dom";

const SmMenuLink = ({ name, path }) => {
  return (
    <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold capitalize">
      <Link
        className="text-globalColor2 hover:text-globalColor0 text-md transition flex items-center justify-between gap-3 w-fit"
        to={path}
      >
        {name}
      </Link>
    </li>
  );
};

export default SmMenuLink;
