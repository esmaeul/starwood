import { Link } from "react-router-dom";
const MenuLink = ({ name, path, icon }) => {
  return (
    <li>
      <Link
        className="flex items-center justify-between gap-3 relative group py-4 mx-3 hover:text-globalColor0 transition-all"
        to={path}
      >
        {name}
        {icon ? icon : ""}
        <div className="absolute top-full left-0 w-0 h-[2px] bg-globalColor0 bg-opacity-50 group-hover:w-full transition-all duration-300"></div>
      </Link>
    </li>
  );
};

export default MenuLink;
