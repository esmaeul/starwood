import { Link } from "react-router-dom";

const SubmenuLink = ({ name, path, icon, onClose }) => {
  return (
    <li>
      <Link
        className="flex items-center justify-between w-full gap-16 relative group py-2 mx-3 text-black hover:text-globalColor0 transition-all"
        to={path}
        onClick={onClose}
      >
        {name}
        {icon ? icon : ""}
      </Link>
    </li>
  );
};

export default SubmenuLink;
