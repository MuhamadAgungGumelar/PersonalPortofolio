import { useState, useEffect } from "react";
export default function Clock() {
  const [ctime, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1 className="p-1 px-2 rounded-xl transition ease-in delay-200 duration-700 bg-lightFont text-light dark:bg-darkFont dark:text-dark">
        {ctime}
      </h1>
    </>
  );
}
