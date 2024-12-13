
import { RxHamburgerMenu } from "react-icons/rx";

export default function HamburgerMenu() {
  return (
    <>
      <div className="w-14 h-14 flex items-center justify-center md:hidden text-wingman-textcolor rounded-md">
        <RxHamburgerMenu size={35} />
      </div>
    </>
  );
}
