import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";

export default function Education() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
  return (
    <>
      <div id="educations" className="flex flex-col gap-8">
        {isLocale === "en" ? (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Education
            </h1>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                Electrical Engineering (Bachelor)
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Universitas Pendidikan Indonesia | Bandung, Indonesia | June
                2018 – August 2023
              </h3>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Pendidikan
            </h1>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                Teknik Elektro (Sarjana)
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Universitas Pendidikan Indonesia | Bandung, Indonesia | Juni
                2018 – Agustus 2023
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}
