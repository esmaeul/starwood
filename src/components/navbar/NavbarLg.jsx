import SocialIcons from "../minicomponents/SocialIcons";
import MenuLink from "./links/MenuLink";
import ServicesLi from "./services/ServicesLi";

function NavbarLg() {
  return (
    <nav className="lg:flex hidden items-center justify-between w-full text-lg">
      <ul className="flex justify-center items-center pl-12">
        <MenuLink name={"Home"} path={"/home"} />
        <MenuLink name={"About"} path={"/about"} />
        <ServicesLi />
        <MenuLink name={"Projects"} path={"/projects"} />
        <MenuLink name={"Careers"} path={"/careers"} />
        <MenuLink name={"Contact Us"} path={"/contact"} />
      </ul>
      <SocialIcons />
    </nav>
  );
}

export default NavbarLg;
