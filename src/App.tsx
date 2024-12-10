import { useState, useEffect } from "react";
import { useMediaQuery } from "./hooks";
import { Navbar, DotGroup, Footer } from "./components";
import { Landing, Skills, Projects, Contact } from "./views";
import { PageType } from "./const";

function App() {
  const [selectedPage, setSelectedPage] = useState<PageType>("home");
  const [isPageTop, setIsPageTop] = useState<boolean>(true);
  const isSmallScreen = useMediaQuery("md");

  useEffect(() => {
    const manageScroll = () => {
      setIsPageTop(window.scrollY < 20);
      if (window.scrollY > 2631) return setSelectedPage("contact");
      if (window.scrollY > 1791) return setSelectedPage("projects");
      if (window.scrollY > 831) return setSelectedPage("skills");
      return setSelectedPage("home");
    };
    document.addEventListener("scroll", manageScroll);
    return () => document.addEventListener("scroll", manageScroll);
  }, []);

  return (
    <div className="app bg-primary">
      <Navbar
        backgroundColor={isPageTop ? "" : "bg-secondary"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {!isSmallScreen && (
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <div className="w-5/6 mx-auto md:h-full">
        <Landing setSelectedPage={setSelectedPage} />
        <Skills />
        <Projects />
        <Contact />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
