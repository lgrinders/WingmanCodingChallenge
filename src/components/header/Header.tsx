import HamburgerMenu from "../ui/hamburgerMenu/HamburgerMenu";
import LightDarkModeButton from "../ui/lightDarkModeButton/LightDarkModeButton";
import WingmanLogo from "../ui/wingmanLogo/WingmanLogo";
import { Link } from "react-router";

export default function Header() {
  return ( 
    <>
      <div className="w-screen h-20 border-b border-neutral-300 z-10 fixed top-0 text-wingman-textcolor bg-wingman-primary justify-between flex px-4 sm:px-12 items-center">
        <Link to={"/"} className="flex items-center gap-2">
          <div className="w-14 h-14 flex items-center justify-center bg-wingman-setPrimary rounded-md">
            <WingmanLogo />
          </div>

          <h2 className="text-3xl font-bold">Wingman</h2>
        </Link>

        <div className="flex gap-2 justify-center items-center">
          <LightDarkModeButton />
          <HamburgerMenu />
        </div>
      </div>
    </>
  );
}

