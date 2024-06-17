import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
//import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);

export default function Main() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  // const main = useRef(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.from("#main", {
  //       xPercent: -100,
  //       duration: 0.4,
  //       delay: 0.3,
  //     }).from("#main-text-1", {
  //       opacity: 0,
  //       y: "+=30",
  //       stagger: 0.5,
  //     });
  //   }, comp);

  //   return () => ctx.revert();
  // }, []);

  // useGSAP(() => {
  //   let ctx = gsap.context(() => {
  //     let split = new SplitText("#main-text-1", {
  //       type: "lines",
  //     });

  //     const tl = gsap.timeline();

  //     tl.from(split.chars, {
  //       opacity: 0,
  //       duration: 0.1,
  //       stagger: 0.1,
  //     });

  //     tl.to(split.chars, {
  //       duration: 0.5,
  //       opacity: 0,
  //       stagger: 0.05,
  //       ease: "power4.inOut",
  //     });
  //   });
  // });

  return (
    <>
      <div
        id="main"
        className="h-auto gap-6 md:gap-10 py-12 sm:py-20 xl:py-34 flex flex-col"
        //ref={main}
      >
        <h1 className="font-extrabold tracking-wide underline text-5xl md:text-7xl">
          Summary
        </h1>
        <div className="flex flex-col gap-4 lg:gap-4">
          <h1 className="font-extrabold tracking-wide text-5xl sm:text-7xl lg:text-8xl">
            Muhamad Agung Gumelar
          </h1>
          <h3 className="font-semibold tracking-wide text-2xl md:text-4xl">
            - Fullstack Developer | Machine Learning Developer -
          </h3>
        </div>
        {isLocale === "id" ? (
          <>
            <p className="font-light tracking-wide text-lg md:text-3xl lg:pr-72">
              Saya Muhamad Agung Gumelar fresh graduate dengan gelar Sarjana
              Teknik Elektro dari Universitas Pendidikan Indonesia (UPI), dengan
              spesialisasi Teknik Telekomunikasi. Pengalaman saya termasuk
              keterlibatan aktif dalam Himpunan Mahasiswa Elektro (HME FPTK
              UPI), tempat saya mengelola program seperti Industri Kunjungan,
              Pelatihan Infografis dan Kelistrikan, dan Telekomunikasi
              Lokakarya. Saya juga pernah berpartisipasi dalam Digital Talent
              Program beasiswa dari Kementerian Komunikasi dan Informasi
              (Kominfo) dan Pelatihan Dicoding Indonesia. Selain itu, saya
              memiliki pengalaman sebagai Software Research and Development
              Intern di PT Sergio Indo Prima Bandung. Saya bersemangat untuk
              terus belajar dan berkembang di bidang teknologi informasi dan
              telekomunikasi dan saya siap berkontribusi pada lingkungan kerja
              yang dinamis dan inovatif.
            </p>
          </>
        ) : (
          <>
            <p className="font-light tracking-wide text-lg md:text-3xl lg:pr-72">
              I am Muhamad Agung Gumelar a fresh graduate with a {`Bachelor'`}s
              degree in Electrical Engineering from the Indonesian University of
              Education (UPI), specializing in Telecommunication Engineering. My
              experience includes active involvement in the Electrical Student
              Association (HME FPTK UPI), where I managed programs such as
              Industrial Visits, Infographic and Electrical Training, and
              Telecommunication Workshops. I have also participated in the
              Digital Talent Scholarship program from the Ministry of
              Communication and Information (Kominfo) and the Indonesian
              Dicoding Training. Additionally, I have experience as a Software
              Research and Development Intern at PT Sergie Indo Prima Bandung. I
              am enthusiastic about continuing to learn and develop in the field
              of information technology and telecommunication and am ready to
              contribute to a dynamic and innovative work environment.
            </p>
          </>
        )}
        <a
          className={`border-2 w-fit p-2 rounded-xl text-lg md:text-3xl border-lightFont dark:border-darkFont ${
            isDarkMode
              ? "hover:bg-darkFont hover:text-dark "
              : " hover:bg-lightFont hover:text-light "
          }`}
          href="/CV_Muhamad_Agung_Gumelar_Terbaru.pdf"
          download
        >
          Download CV
        </a>
      </div>
    </>
  );
}
