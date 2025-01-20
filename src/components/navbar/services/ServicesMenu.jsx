import SubmenuLink from "../links/SubmenuLink";
const ServicesMenu = ({ serMenu, setSerMenu }) => {
  const handleMenuClose = () => {
    setSerMenu(false);
  };

  return (
    <ul
      className={`absolute z-50 left-0 top-[101%] flex-col opacity-0 py-1.5 text-nowrap bg-globalColor8 border-t-2 border-t-globalColor0 border-opacity-80 transition rounded-sm cursor-default shadow-2xl ${
        serMenu
          ? "translate-y-0 opacity-100 flex opacity-1 pointer-events-auto"
          : "-translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <SubmenuLink
        onClose={handleMenuClose}
        name={"Interior Design"}
        path={"/interior-design"}
      />
      <SubmenuLink
        onClose={handleMenuClose}
        name={"Interior Decorations"}
        path={"/interior-decorations"}
      />
      <SubmenuLink
        onClose={handleMenuClose}
        name={"Exterior Decorations"}
        path={"/exterior-decorations"}
      />
      {/* <DoorsLi onClose={handleMenuClose} /> */}
      <SubmenuLink
        onClose={handleMenuClose}
        name={"Stages & Platforms"}
        path={"/stages-and-platforms"}
      />
      <SubmenuLink
        onClose={handleMenuClose}
        name={"Architectural Work"}
        path={"/architectural-work"}
      />
    </ul>
  );
};

export default ServicesMenu;
