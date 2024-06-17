import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <>
      <div id="contacts" className="flex flex-col gap-8">
        <>
          <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
            {isLocale === "en" ? "Contacts" : "Kontak"}
          </h1>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Email
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              mohamadagung007@gmail.com
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Linkedin
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Muhamad Agung Gumelar
            </h3>
            <h2
              className={`w-fit font-bold tracking-wide text-2xl md:text-4xl ${
                isDarkMode
                  ? "hover:bg-darkFont hover:text-dark"
                  : " hover:bg-lightFont hover:text-light"
              }`}
            >
              <a href="https://linkedin.com/in/muhamad-agung-gumelar">
                <FaLinkedin />
              </a>
            </h2>
          </div>
        </>
      </div>
    </>
  );
}
