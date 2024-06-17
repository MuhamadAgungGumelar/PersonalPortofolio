import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";

export default function OrganizationExperience() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
  return (
    <>
      <div id="organization-experiences" className="flex flex-col gap-8">
        {isLocale === "en" ? (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Organization Experience
            </h1>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                Staff of Electrical Engineering Development
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Himpunan Mahasiswa Elektro (HME FPTK UPI) | Bandung, Indonesia |
                September 2019 - April 2020
              </h3>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Pengalaman Organisasi
            </h1>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                Staf Bidang Pengembangan Teknik Elektro
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Himpunan Mahasiswa Elektro (HME FPTK UPI) | Bandung, Indonesia |
                September 2019 - April 2020
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}
