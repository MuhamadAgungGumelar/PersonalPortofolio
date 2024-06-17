import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
//import { useGSAP } from "@gsap/react";
//import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);

export default function Main() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
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
        className="h-auto py-48 sm:py-20 xl:py-36 flex justify-center items-center"
        //ref={main}
      >
        {isLocale === "id" ? (
          <>
            <h1 className="font-extrabold tracking-wide text-6xl hidden sm:block lg:text-7xl xl:text-8xl">
              Fullstack dan Machine Learning Developer yang antusias untuk terus
              belajar dan berkembang serta siap berkontribusi pada lingkungan
              kerja yang dinamis dan inovatif
            </h1>
            <h1 className="font-extrabold text-6xl sm:hidden">
              Fullstack dan Machine Learning Developer
            </h1>
          </>
        ) : (
          <>
            <h1
              id="main-text-1"
              className="font-extrabold tracking-wide text-6xl hidden sm:block lg:text-7xl xl:text-8xl"
            >
              Fullstack and Machine Learning Developer who enthusiastic about
              continuing to learn and develop, ready to contribute to a dynamic
              and innovative work environment
            </h1>
            <h1 className="font-extrabold text-6xl sm:hidden">
              Fullstack and Machine Learning Developer
            </h1>
          </>
        )}
      </div>
    </>
  );
}
