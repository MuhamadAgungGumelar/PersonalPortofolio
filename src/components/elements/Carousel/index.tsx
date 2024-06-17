import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { useState } from "react";

export default function Carousel({
  image,
  alt,
}: {
  image: string[];
  alt: string[];
}) {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const [currentSlide, setCurrentSlide] = useState(0);
  const prev = () => {
    setCurrentSlide((curr: number) =>
      curr === 0 ? image.length - 1 : curr - 1
    );
  };
  const next = () => {
    setCurrentSlide((curr: number) =>
      curr === image.length - 1 ? 0 : curr + 1
    );
  };

  return (
    <>
      <div className="flex overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.isArray(image) &&
            Array.isArray(alt) &&
            image.map((imageItem: string, index: number) => (
              <div
                key={index}
                className="min-w-full flex justify-center items-center"
              >
                <Image
                  src={imageItem}
                  alt={alt[index]}
                  layout="intrinsic"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            ))}
        </div>

        <div className="absolute -inset-4 xl:inset-10 flex items-center justify-between p-4">
          <button
            className={`rounded-full p-1 ${
              isDarkMode
                ? "hover:bg-darkFont hover:text-dark"
                : " hover:bg-lightFont hover:text-light"
            }`}
            onClick={prev}
          >
            <FaChevronLeft size={40} />
          </button>

          <button
            className={`rounded-full p-1 ${
              isDarkMode
                ? "hover:bg-darkFont hover:text-dark"
                : " hover:bg-lightFont hover:text-light"
            }`}
            onClick={next}
          >
            <FaChevronRight size={40} />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex justify-center items-center gap-2">
            {Array.isArray(image) &&
              image.map((imageItem: string, index: number) => (
                <button
                  key={index}
                  className={`w-2 h-2 transition-all rounded-full bg-lightFont dark:bg-darkFont ${
                    index === currentSlide ? "p-2" : "bg-opacity-50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
