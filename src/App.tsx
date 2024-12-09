import { useState, useEffect } from "react";
import { useMediaQuery } from "./hooks";
import { Navbar } from "./components/navbar";
import { DotGroup } from "./components/dot-group";
import { PageType } from "./const";

function App() {
  const [selectedPage, setSelectedPage] = useState<PageType>("home");
  const [isPageTop, setIsPageTop] = useState<boolean>(true);
  const isTablet = useMediaQuery("md");

  useEffect(() => {
    const checkIfPageTop = () => setIsPageTop(window.scrollY === 0);
    document.addEventListener("scroll", checkIfPageTop);
    return () => document.addEventListener("scroll", checkIfPageTop);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        backgroundColor={isPageTop ? "" : "bg-red"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {!isTablet && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
