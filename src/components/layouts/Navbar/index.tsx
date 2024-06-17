// components/Navbar.js
import { RootState } from "@/redux/types";
import { toggleTheme, setDarkMode } from "@/redux/slices/themeSlice";
import { setLocale, initializeLocale } from "@/redux/slices/localSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMoon, IoSunny } from "react-icons/io5";
import Clock from "../../elements/Clock";
import Flag from "react-flagkit";

export default function Navbar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const isLocale = useSelector((state: RootState) => state.local.isLocale);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    if (typeof window !== "undefined") {
      const storedDarkMode = localStorage.getItem("isDarkMode");
      if (storedDarkMode !== null) {
        dispatch(setDarkMode(JSON.parse(storedDarkMode)));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      //console.log("Dark mode enabled");
    } else {
      document.body.classList.remove("dark");
      //console.log("Dark mode disabled");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLocale = localStorage.getItem("locale");
      if (storedLocale !== null) {
        dispatch(initializeLocale(storedLocale));
      }
    }
  }, [dispatch]);

  return (
    <>
      <nav className="navbar sticky top-4 z-10">
        <ul className="flex flex-row gap-4 justify-between py-3 text-3xl">
          <li>
            <Clock />
          </li>
          <li>
            <div className="flex flex-row gap-6">
              <button onClick={() => dispatch(toggleTheme())}>
                {isDarkMode ? <IoSunny /> : <IoMoon />}
              </button>
              |
              <button onClick={() => dispatch(setLocale())}>
                {isLocale === "id" ? (
                  <Flag country="ID" />
                ) : (
                  <Flag country="US" />
                )}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
