// Badge.tsx
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";

export default function Badge({
  names,
  icon,
}: {
  names: string[];
  icon: JSX.Element[];
}) {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <div className="flex flex-wrap gap-3">
      {names.map((name, index) => (
        <h4
          key={index}
          className={`flex items-center gap-2 font-normal border-2 rounded-xl w-fit p-1 tracking-wide text-lg md:text-2xl border-lightFont dark:border-darkFont ${
            isDarkMode
              ? "hover:bg-darkFont hover:text-dark"
              : "hover:bg-lightFont hover:text-light"
          }`}
        >
          {icon[index]}
          {name}
        </h4>
      ))}
    </div>
  );
}
