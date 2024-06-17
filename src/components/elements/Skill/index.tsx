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
  const isLocale = useSelector((state: RootState) => state.local.isLocale) as
    | "en"
    | "id";

  const technicalSkills: Record<"en" | "id", string[]> = {
    en: [
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
    ],
    id: [
      "Python",
      "Javascript",
      "C#",
      "AI",
      "ML",
      "Pengembangan Web",
      "Pengembangan Perangkat Lunak",
      "IoT",
      "Administrasi Jaringan",
      "Administrasi Basis Data",
      "DevOps",
      "Masih Banyak yang Harus Dipelajari...",
    ],
  };

  const softSkills: Record<"en" | "id", string[]> = {
    en: [
      "Teamwork",
      "Communication",
      "Empathy",
      "Problem Solving",
      "Critical Thinking",
      "Leadership",
      "Emotional Intelligence",
      "More to Learn...",
    ],
    id: [
      "Kerja Tim",
      "Komunikasi",
      "Empati",
      "Pemecahan Masalah",
      "Berpikir Kritis",
      "Kepemimpinan",
      "Kecerdasan Emosional",
      "Masih Banyak yang Harus Dipelajari...",
    ],
  };

  const icons = [
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
  ];

  return (
    <>
      <div id="skills" className="flex flex-col gap-8">
        <>
          <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
            {isLocale === "id" ? "Keterampilan" : "Skills"}
          </h1>
          <div className="grid grid-cols-1 gap-14">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                {isLocale === "id" ? "Keterampilan Teknis" : "Technical Skills"}
              </h2>
              <h3 className="grid font-normal tracking-wide text-lg md:text-3xl">
                <Badge names={technicalSkills[isLocale]} icon={icons} />
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
                {isLocale === "id" ? "Keterampilan Lunak" : "Soft Skills"}
              </h2>
              <h3 className="font-normal tracking-wide text-lg md:text-3xl">
                <Badge names={softSkills[isLocale]} icon={[]} />
              </h3>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
