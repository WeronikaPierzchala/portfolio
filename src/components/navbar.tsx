import { useState } from "react";
import { useMediaQuery, usePageContext } from "../hooks";
import { Link, LinkProps } from "./link";
import { PAGES, PageType } from "../const";

import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

type NavbarProps = {
  backgroundColor?: string;
};

export const Navbar = ({ backgroundColor }: NavbarProps) => {
  const { selectedPage, setSelectedPage } = usePageContext();
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery("md");

  const shouldShowPopup = isSmallScreen && isMenuToggled;

  return (
    <nav
      className={`${backgroundColor} z-40 w-full fixed top-0 py-6 transition duration-75`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">WP</h4>
        {isSmallScreen ? (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={menuIcon} />
          </button>
        ) : (
          <div className="flex justify-between gap-16 font-opensans font-semibold">
            <NavigationLinks
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        )}
        {shouldShowPopup && (
          <div className="fixed right-0 bottom-0 h-full bg-secondary w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={closeIcon} />
              </button>
            </div>
            <div className="flex flex-col gap-10 p-12 pt-0 text-white text-xl">
              <NavigationLinks
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavigationLinks = ({
  selectedPage,
  setSelectedPage,
}: Omit<LinkProps, "page">) => {
  return (
    <>
      {Object.values(PAGES).map((page: PageType) => (
        <Link
          key={page}
          page={page}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </>
  );
};
