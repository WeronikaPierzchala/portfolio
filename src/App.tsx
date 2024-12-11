import { useState, useEffect } from "react";
import { useMediaQuery } from "./hooks";
import { Navbar, DotGroup, Footer } from "./components";
import { Landing, Skills, Projects, Contact } from "./views";
import { PageType } from "./const";
import { useSetPageOnScroll } from "./hooks/use-set-page-on-scroll";

function App() {
  const [selectedPage, setSelectedPage] = useState<PageType>("home");
  const [isPageTop, setIsPageTop] = useState<boolean>(true);
  const isSmallScreen = useMediaQuery("md");

  useEffect(() => {
    const manageScroll = () => {
      if (window.scrollY > 20) {
        return setIsPageTop(false);
      }

      setIsPageTop(true);
      setSelectedPage("home");
    };
    document.addEventListener("scroll", manageScroll);
    return () => document.addEventListener("scroll", manageScroll);
  }, []);

  useSetPageOnScroll(setSelectedPage);

  return (
    <div className="app bg-primary relative">
      <Navbar
        backgroundColor={isPageTop ? "" : "bg-secondary"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto">
        {!isSmallScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
