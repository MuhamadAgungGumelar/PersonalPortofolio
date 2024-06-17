import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import PortofolioElement from "@/components/elements/Portofolio";
import { FaPython } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { SiMqtt } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiGeopandas } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

export default function Portofolio() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div
        id="portofolio"
        className="flex flex-col gap-8 pt-48 sm:py-20 xl:py-24"
      >
        <>
          <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
            Portofolio
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <PortofolioElement
              mobile="portofolio-1-mobile"
              desktop="portofolio-1-desktop"
              title="Graphical User Interface (GUI) Remote Operation Vehichle (ROV) Program using MQTT and Python Desktop Application"
              description={
                isLocale === "en"
                  ? `Graphical User Interface (GUI) desktop program integrated with Remote Operation Vehichle (ROV) to monitor and detect underwater cable leaks based on the OpenCV desktop application and the MQTT protocol`
                  : `Program desktop Graphical User Interface (GUI) yang terintegrasi dengan Remote Operation Vehichle (ROV) untuk memantau dan mendeteksi kebocoran kabel bawah air berdasarkan aplikasi desktop OpenCV dan protokol MQTT`
              }
              image={["/ROV1.png", "/ROV2.png"]}
              alt={["ROV1", "ROV2"]}
              tech={["Python", "MQTT", "OpenCV", "PYQT"]}
              iconTech={[
                <FaPython key={0} />,
                <SiOpencv key={1} />,
                <SiMqtt key={2} />,
              ]}
            />

            <PortofolioElement
              mobile="portofolio-2-mobile"
              desktop="portofolio-2-desktop"
              title="Lung Disease Detection System Web Application"
              description={
                isLocale === "en"
                  ? "Lung Disease Detection System Using Thorax X-Ray Image With Convolutional Neural Network (CNN) Algorithm And Web Application Based On Deep Hybrid Learning (DHL)"
                  : "Sistem Deteksi Penyakit Paru Menggunakan Citra Sinar X Thorax Dengan Algoritma Convolutional Neural Network (CNN) Dan Aplikasi Web Berbasis Deep Hybrid Learning (DHL)"
              }
              image={["/LungDisease1.png", "/LungDisease2.png"]}
              alt={["LungDisease1", "LungDisease2"]}
              githubLink="https://github.com/MuhamadAgungGumelar/project_skripsi_fix"
              tech={[
                "Python",
                "Django",
                "Tensorflow",
                "MySql",
                "Jupyter",
                "Numpy",
                "Geopandas",
                "AWS",
              ]}
              iconTech={[
                <FaPython key={0} />,
                <SiDjango key={1} />,
                <SiTensorflow key={2} />,
                <GrMysql key={3} />,
                <SiJupyter key={4} />,
                <SiNumpy key={5} />,
                <SiGeopandas key={6} />,
                <FaAws key={7} />,
              ]}
            />

            <PortofolioElement
              mobile="portofolio-3-mobile"
              desktop="portofolio-3-desktop"
              title="Reimbursement Web Application"
              description={
                isLocale === "en"
                  ? "Reimbursement Web Application used by employee to reimburse  based on expenses"
                  : "Aplikasi Web Reimbursement yang digunakan oleh karyawan untuk mengganti biaya berdasarkan pengeluaran"
              }
              image={["/Reimbursemen1.png", "/Reimbursemen2.png"]}
              alt={["Reimbursement1", "Reimbursement2"]}
              githubLink="https://github.com/MuhamadAgungGumelar/ReimbursementAPI"
              tech={["C#", "SQL Server", "Visual Studio", "ASP.NET Core"]}
              iconTech={[
                <SiCsharp key={0} />,
                <SiMicrosoftsqlserver key={2} />,
                <SiVisualstudio key={3} />,
              ]}
            />

            <PortofolioElement
              mobile="portofolio-4-mobile"
              desktop="portofolio-4-desktop"
              title="E-Warung Web Application"
              description={
                isLocale === "en"
                  ? "E-Warung is a simple Laravel-based e-commerce web application designed for small business traders such as small shops"
                  : "E-Warung adalah aplikasi web e-commerce sederhana berbasis Laravel yang diperuntukan untuk para pedagang UMKM seperti warung kecil"
              }
              image={["/E-Warung1.png", "/E-Warung2.png"]}
              alt={["E-Warung1", "E-Warung2"]}
              githubLink="https://github.com/MuhamadAgungGumelar/064-Muhamad-Agung-Gumelar"
              tech={["PHP", "Laravel", "PostGreSQL"]}
              iconTech={[
                <FaPhp key={0} />,
                <SiLaravel key={1} />,
                <SiPostgresql key={2} />,
              ]}
            />
          </div>
        </>
      </div>
    </>
  );
}
