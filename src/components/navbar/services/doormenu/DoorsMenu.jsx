import SubmenuLink from "../../links/SubmenuLink";
const DoorsMenu = ({ doorsMenu, onClose }) => {
  return (
    <ul
      className={`absolute z-50 left-full top-1/2 py-1.5 flex-col opacity-0 min-w-fit text-nowrap bg-globalColor8 border-t border-t-globalColor0 border-opacity-80 transition rounded-sm cursor-default shadow-2xl ${
        doorsMenu
          ? "translate-y-0 opacity-100 flex opacity-1 pointer-events-auto"
          : "-translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <SubmenuLink
        onClose={onClose}
        name={"Interior Doors"}
        path={"interior-doors"}
      />
      <SubmenuLink
        onClose={onClose}
        name={"Exterior Doors"}
        path={"exterior-doors"}
      />
      <SubmenuLink
        onClose={onClose}
        name={"Palace & Residential Doors"}
        path={"palace-and-residential-doors"}
      />
      <SubmenuLink
        onClose={onClose}
        name={"Office & Corporate Doors"}
        path={"office-and-corporate-doors"}
      />
    </ul>
  );
};

export default DoorsMenu;
