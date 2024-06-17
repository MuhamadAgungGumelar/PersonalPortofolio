import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/types";
import { setLoading } from "@/redux/slices/loadingSlice";

export default function Loader() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const dispatch = useDispatch();
  const container = useRef<HTMLDivElement>(null);
  const loadingText = useRef<HTMLDivElement>(null);

  useGSAP(() => {}, []);

  return (
    <>
      {isLoading && (
        <div
          className="bg-light dark:bg-dark fixed inset-0 flex justify-center items-center"
          ref={container}
        >
          <p className="loading text-center text-2xl" ref={loadingText}>
            Loading
          </p>
        </div>
      )}
    </>
  );
}
