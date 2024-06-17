import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { FiExternalLink } from "react-icons/fi";

export default function Certification() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
  return (
    <>
      <div id="certifications" className="flex flex-col gap-8">
        <>
          <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
            {isLocale === "en" ? "Certifications" : "Sertifikat"}
          </h1>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Microsoft Certified: Azure AI Engineer Associate
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Microsoft | March 2024 – March 2025
            </h3>
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              <a href="https://learn.microsoft.com/api/credentials/share/en-us/MuhamadAgungGumelar-9410/E6B53AFF217F2BEF?sharingId=4B79C80D37939F73">
                <FiExternalLink />
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Belajar Pengembangan Machine Learning
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Dicoding Indonesia | Bandung, Indonesia | February 2024 – February
              2027
            </h3>
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              <a href="https://www.dicoding.com/certificates/6RPNVG109Z2M">
                <FiExternalLink />
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Belajar Membangun Arsitektur Microservices
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Dicoding Indonesia | Bandung, Indonesia | December 2023 - December
              2026
            </h3>
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              <a href="https://www.dicoding.com/certificates/0LZ022O6QX65">
                <FiExternalLink />
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Belajar Membuat Aplikasi Web dengan React
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Dicoding Indonesia | Bandung, Indonesia | November 2023 - November
              2026
            </h3>
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              <a href="https://www.dicoding.com/certificates/4EXGKY001ZRL">
                <FiExternalLink />
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Microsoft Certified: Azure Fundamentals
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Microsoft | October 2023 - Present
            </h3>
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              <a href="https://drive.google.com/file/d/1J7M_1lkaeh_A-C_yG3YoZ2__GG7-jfpZ/view?usp=sharing">
                <FiExternalLink />
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Microsoft Certified: Azure Data Fundamentals
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Microsoft | October 2023 - Present
            </h3>
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              <a href="https://drive.google.com/file/d/1elJ7To4zWNNdaVkpvLqEECr8dvGOXFQ0/view">
                <FiExternalLink />
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Microsoft Certified: Azure AI Fundamentals
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Microsoft | October 2023 - Present
            </h3>
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              <a href="https://drive.google.com/file/d/1ymP3QNcRuigAm9i6EPOo0CH7c99owh6j/view">
                <FiExternalLink />
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Belajar Implementasi CI/CD
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Dicoding Indonesia | Bandung, Indonesia | September 2023 -
              September 2026
            </h3>
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              <a href="https://www.dicoding.com/certificates/81P27QK7QZOY">
                <FiExternalLink />
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              Menjadi Linux System Administrator
            </h2>
            <h3 className="font-normal tracking-wide text-lg md:text-3xl">
              Dicoding Indonesia | Bandung, Indonesia | August 2023 - August
              2026
            </h3>
            <h2 className="font-bold tracking-wide text-2xl md:text-4xl">
              <a href="https://www.dicoding.com/certificates/JLX1DO05JZ72">
                <FiExternalLink />
              </a>
            </h2>
          </div>
        </>
      </div>
    </>
  );
}
