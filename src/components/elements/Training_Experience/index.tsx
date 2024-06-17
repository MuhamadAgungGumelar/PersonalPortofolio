import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";

export default function TrainingExperience() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
  return (
    <>
      <div id="training-experiences" className="flex flex-col gap-8">
        {isLocale === "en" ? (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Training Experience
            </h1>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>
                  Azure AI Engineer – Batch 1 Digital Talent Scholarship 2024
                </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Kementrian Komunikasi dan Informatika Republik Indonesia |
                February 2024 – March 2024
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>Lintasarta Cloudeka Digischool 2023</li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Lintasarta | December 2023 – March 2024
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>Indosat Ooredoo Hutchison Digital Camp 2023</li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Indosat Ooredoo Hutchison | November 2023 – February 2024
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>
                  Coding Camp: Full-Stack Developer Digital Talent Scholarship
                  2023
                </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Kementrian Komunikasi dan Informatika Republik Indonesia |
                September 2023 – November 2023
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>
                  Azure for Beginner: Azure Fundamentals, Data Fundamentals, AI
                  Fundamentals Digital Talent Scholarship 2023
                </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Kementrian Komunikasi dan Informatika Republik Indonesia | July
                2023 – August 2023
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>DevOps and Back-End Developer Scholarship Program</li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Dicoding Indonesia | October 2022 - March 2023
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>
                  Big Data using Python Fresh Graduate Academy Digital Talent
                  Scholarship
                </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Kementrian Komunikasi dan Informatika Republik Indonesia | July
                2022 - August 2022
              </h3>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Pengalaman Pelatihan
            </h1>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>
                  Azure AI Engineer – Batch 1 Digital Talent Scholarship 2024
                </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Kementrian Komunikasi dan Informatika Republik Indonesia |
                Februari 2024 – Maret 2024
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>Lintasarta Cloudeka Digischool 2023</li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Lintasarta | Desember 2023 – Maret 2024
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>Indosat Ooredoo Hutchison Digital Camp 2023</li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Indosat Ooredoo Hutchison | November 2023 – Februari 2024
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>
                  Coding Camp: Full-Stack Developer Digital Talent Scholarship
                  2023
                </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Kementrian Komunikasi dan Informatika Republik Indonesia |
                September 2023 – November 2023
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>
                  Azure for Beginner: Azure Fundamentals, Data Fundamentals, AI
                  Fundamentals Digital Talent Scholarship 2023
                </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Kementrian Komunikasi dan Informatika Republik Indonesia | Juli
                2023 – Agustus 2023
              </h3>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>DevOps and Back-End Developer Scholarship Program</li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Dicoding Indonesia | October 2022 - March 2023
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                <li>
                  Big Data using Python Fresh Graduate Academy Digital Talent
                  Scholarship
                </li>
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                Kementrian Komunikasi dan Informatika Republik Indonesia | July
                2022 - August 2022
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}
