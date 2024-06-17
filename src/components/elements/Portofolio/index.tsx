import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import Carousel from "../Carousel";
import Badge from "../Badge";

export default function PortofolioElement(props: any) {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <>
      <div
        id={props.mobile}
        className={`flex flex-col w-fit gap-6 border-2 rounded-xl p-4 xl:hidden border-lightFont dark:border-darkFont`}
      >
        <h2 className="font-bold tracking-wide text-center text-2xl md:text-4xl">
          {props.title}
        </h2>

        <Carousel image={props.image} alt={props.alt} />

        <h3 className="font-normal tracking-wide text-lg md:text-3xl">
          {props.description}
        </h3>

        <div className="flex flex-col gap-2">
          <h3 className="font-normal tracking-wide text-lg md:text-3xl">
            <span className="font-extrabold text-2xl">Tech:</span>
          </h3>
          <Badge names={props.tech} icon={props.iconTech} />
        </div>

        <div className="flex flex-row gap-2 text-3xl">
          <a href={props.websiteLink}>
            <IoLinkOutline />
          </a>
          <a href={props.githubLink}>
            <FaGithub />
          </a>
        </div>
      </div>

      <div
        id={props.desktop}
        className={`hidden w-fit gap-6 border-2 rounded-xl p-6 xl:grid xl:grid-cols-1 border-lightFont dark:border-darkFont`}
      >
        <div className="flex flex-col justify-between  gap-8 ">
          <h2 className="font-bold tracking-wide text-center text-2xl md:text-4xl">
            {props.title}
          </h2>
          <Carousel image={props.image} alt={props.alt} />
          <h3 className="font-normal tracking-wide text-lg md:text-3xl">
            {props.description}
          </h3>
          <div className="flex flex-col gap-2">
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              <span className="font-extrabold text-2xl">Tech:</span>
            </h3>
            <Badge names={props.tech} icon={props.iconTech} />
          </div>
          <div className="flex flex-row gap-4 text-4xl border-lightFont dark:border-darkFont">
            <a
              className={`${
                isDarkMode
                  ? "hover:bg-darkFont hover:text-dark"
                  : " hover:bg-lightFont hover:text-light"
              }`}
              href={props.websiteLink}
            >
              <IoLinkOutline aria-disabled="true" />
            </a>
            <a
              className={`border-lightFont dark:border-darkFont ${
                isDarkMode
                  ? "hover:bg-darkFont hover:text-dark"
                  : " hover:bg-lightFont hover:text-light"
              }`}
              href={props.githubLink}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
