import Image from "next/image";
import { Inter } from "next/font/google";
import Loader from "@/components/layouts/Loader";
import Main from "@/components/layouts/Main";
import About from "@/components/layouts/About";
import Portofolio from "@/components/layouts/Portofolio";
import Footer from "@/components/layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/slices/loadingSlice";
import { useEffect } from "react";
import { RootState } from "@/redux/types";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    // Simulate loading completion after 2 seconds
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Main />
          <Portofolio />
          <About />
          <Footer />
        </>
      )}
    </>
  );
}
