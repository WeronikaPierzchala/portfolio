import { useState, useEffect } from "react";
import { useMediaQuery, PageContext } from "./hooks";
import { Navbar, DotGroup, Footer } from "./components";
import { Landing, Skills, Projects, Contact } from "./views";
import { PageType, PAGES } from "./const";

function App() {
  const [selectedPage, setSelectedPage] = useState<PageType>(PAGES.home);
  const [isPageTop, setIsPageTop] = useState<boolean>(true);
  const isSmallScreen = useMediaQuery("md");

  useEffect(() => {
    const manageScroll = () => setIsPageTop(window.scrollY < 20);
    document.addEventListener("scroll", manageScroll);
    return () => document.addEventListener("scroll", manageScroll);
  }, []);

  return (
    <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
      <div className="app bg-primary relative">
        <Navbar backgroundColor={isPageTop ? "" : "bg-secondary"} />
        <div className="w-5/6 mx-auto">
          {!isSmallScreen && <DotGroup />}
          <Landing />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </PageContext.Provider>
  );
}

export default App;
