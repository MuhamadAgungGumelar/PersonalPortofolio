import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";

export default function AppShell(props: AppShellProps) {
  const { children } = props;
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  return (
    <>
      {!isLoading && <Navbar />}
      {children}
    </>
  );
}

type AppShellProps = {
  children: React.ReactNode;
};
