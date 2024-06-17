import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";

export default function WorkExperience() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
  return (
    <>
      <div id="work-experiences" className="flex flex-col gap-8">
        {isLocale === "en" ? (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Work Experience
            </h1>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>Metrodata Coding Camp: Fullstack Developer </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                PT. Metrodata Electronics Tbk | Jakarta, Indonesia | September
                2023 - November 2023
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>Software Research and Development Intern</li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                PT. Syergie Indo Prima | Bandung, Indonesia | September 2021 -
                December 2021
              </h3>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Pengalaman Kerja
            </h1>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>Metrodata Coding Camp: Fullstack Developer </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                PT. Metrodata Electronics Tbk | Jakarta, Indonesia | September
                2023 - November 2023
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>Magang Software Research and Development</li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                PT. Syergie Indo Prima | Bandung, Indonesia | September 2021 -
                Desember 2021
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}
