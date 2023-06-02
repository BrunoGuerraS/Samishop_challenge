"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect } from "react";
import { Aside } from "./components/Aside";
import { DetailSection } from "./components/DetailSection";

const Home = () => {
  const { isInDesktop, setIsInDesktop } = useContext(GlobalContext);

  useEffect(() => {
    const handleResize = () => {
      setIsInDesktop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="h-20 flex justify-center items-center bg-ravnBlack ">
        <h2 className="text-center text-white text-lg">People of Star Wars</h2>
      </header>
      <main className={`${isInDesktop && "flex"}`}>
        <Aside isInDesktop={isInDesktop} />
        {isInDesktop && <DetailSection />}
      </main>
    </>
  );
};

export default Home;
