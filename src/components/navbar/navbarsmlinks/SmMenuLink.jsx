import { Link } from "react-router-dom";

const SmMenuLink = ({ name, path, icon }) => {
  return (
    <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
      <Link
        className="text-globalColor2 hover:text-globalColor0 text-md transition"
        to={path}
      >
        {name}
        {icon ? icon : ""}
      </Link>
    </li>
  );
};

export default SmMenuLink;
