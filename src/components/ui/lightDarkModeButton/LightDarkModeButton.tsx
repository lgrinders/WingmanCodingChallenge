import { useEffect } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage/useLocalStorage";
import { RxMoon, RxSun } from "react-icons/rx";

export default function LightDarkModeButton() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  // when theme changes from useLocalStorage the body will get a className of theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <div
        className="text-wingman-text-color cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <div className="w-14 h-14 flex items-center justify-center rounded-md">
            <RxMoon size={35} />
          </div>
        ) : (
          <div className="w-14 h-14 flex items-center justify-center rounded-md">
            <RxSun size={35} />
          </div>
        )}
      </div>
    </>
  );
}
