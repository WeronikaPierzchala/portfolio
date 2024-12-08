import { useState } from "react";
import { useMediaQuery } from "./hooks";
import { PAGES, PageType } from "./const"

function App() {
  const [selectedPage, setSelectedPage] = useState<PageType>(PAGES.home);
  const isTablet = useMediaQuery("md");

  return <div className="app bg-deep-blue">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
  </div>;
}

export default App;
