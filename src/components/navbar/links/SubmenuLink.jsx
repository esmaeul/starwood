/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const SubmenuLink = ({ name, path, icon, onClose }) => {
  return (
    <div>
      <Link
        className="flex items-center justify-between max-w-full gap-16 relative group py-2 mx-3 text-black hover:text-globalColor0 transition-all"
        // to={path}
        to={"/decorations"}
        onClick={onClose}
      >
        {name}
        {icon ? icon : ""}
      </Link>
    </div>
  );
};

export default SubmenuLink;
