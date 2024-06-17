import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <>
      <footer className="flex flex-col lg:flex-row items-center justify-center md:justify-between gap-8 p-4">
        <div className="flex flex-row gap-2">
          <h2
            className={`w-fit font-bold tracking-wide text-3xl md:text-4xl ${
              isDarkMode
                ? "hover:bg-darkFont hover:text-dark"
                : " hover:bg-lightFont hover:text-light"
            }`}
          >
            <a href="mailto:mohamadagung007@gmail">
              <SiGmail />
            </a>
          </h2>
          <h2
            className={`w-fit font-bold tracking-wide text-3xl md:text-4xl ${
              isDarkMode
                ? "hover:bg-darkFont hover:text-dark"
                : " hover:bg-lightFont hover:text-light"
            }`}
          >
            <a href="https://linkedin.com/in/muhamad-agung-gumelar">
              <FaLinkedin />
            </a>
          </h2>
          <h2
            className={`w-fit font-bold tracking-wide text-3xl md:text-4xl ${
              isDarkMode
                ? "hover:bg-darkFont hover:text-dark"
                : " hover:bg-lightFont hover:text-light"
            }`}
          >
            <a href="https://github.com/MuhamadAgungGumelar">
              <FaGithub />
            </a>
          </h2>
          <h2
            className={`w-fit font-bold tracking-wide text-3xl md:text-4xl ${
              isDarkMode
                ? "hover:bg-darkFont hover:text-dark"
                : " hover:bg-lightFont hover:text-light"
            }`}
          >
            <a href="https://www.instagram.com/gmlr007/">
              <FaInstagram />
            </a>
          </h2>
          <h2
            className={`w-fit font-bold tracking-wide text-3xl md:text-4xl ${
              isDarkMode
                ? "hover:bg-darkFont hover:text-dark"
                : " hover:bg-lightFont hover:text-light"
            }`}
          >
            <a href="https://wa.me/6287872871856">
              <FaWhatsapp />
            </a>
          </h2>
        </div>
        <div className="text-xl md:text-2xl font-medium text-center">
          <p>
            Copyright <span className="font-extrabold">© 2024</span>. All Rights
            Reserved.
          </p>
        </div>
        <div className="text-xl md:text-2xl font-medium text-center">
          <p>
            Created by:
            <span className="font-extrabold"> Muhamad Agung Gumelar</span>
          </p>
        </div>
      </footer>
    </>
  );
}
