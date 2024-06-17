import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import Badge from "../Badge";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { PiShareNetwork } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { LuDatabase } from "react-icons/lu";
import { SiAzuredevops } from "react-icons/si";

export default function Skill() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
  return (
    <>
      <div id="skills" className="flex flex-col gap-8">
        {isLocale === "en" ? (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Skills
            </h1>
            <div className="grid grid-cols-1 gap-14">
              <div className="flex flex-col gap-4">
                <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                  Technical Skills
                </h2>
                <h3 className="grid font-normal tracking-wide text-lg md:text-3xl">
                  <Badge
                    names={[
                      "Python",
                      "Javascript",
                      "C#",
                      "AI",
                      "ML",
                      "Web Development",
                      "Software Development",
                      "IoT",
                      "Network Administration",
                      "Database Administration",
                      "DevOps",
                      "More to Learn...",
                    ]}
                    icon={[
                      <FaPython key={0} />,
                      <SiJavascript key={1} />,
                      <SiCsharp key={2} />,
                      <GiArtificialIntelligence key={3} />,
                      <PiShareNetwork key={4} />,
                      <MdOutlineWeb key={5} />,
                      <SiSmartthings key={6} />,
                      <FaNetworkWired key={7} />,
                      <FaNetworkWired key={8} />,
                      <LuDatabase key={9} />,
                      <SiAzuredevops key={10} />,
                    ]}
                  />
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                  Soft Skills
                </h2>
                <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                  <Badge
                    names={[
                      "Teamwork",
                      "Communication",
                      "Emphathy",
                      "Problem Solving",
                      "Critical Thinking",
                      "Leadership",
                      "Emotional Intelligence",
                      "More to Learn...",
                    ]}
                    icon={[]}
                  />
                </h3>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
              Skills
            </h1>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                  Skill Teknikal
                </h2>
                <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                  <li>Python</li>
                  <li>Javascript</li>
                  <li>C#</li>
                  <li>Artificial Intellegence (AI)</li>
                  <li>Machine Learning (ML)</li>
                  <li>Web Development</li>
                  <li>Software Development</li>
                  <li>Internet of Things (IoT)</li>
                  <li>Network Administration</li>
                  <li>Database Administration</li>
                </h3>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                  Soft Skills
                </h2>
                <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                  <li>Kerja Sama</li>
                  <li>Komunikasi</li>
                  <li>Empati</li>
                  <li>Pemecahan Masalah</li>
                  <li>Pemikiran Kritis</li>
                  <li>Kepemimpinan</li>
                  <li>Kecerdasan Emosi</li>
                </h3>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
