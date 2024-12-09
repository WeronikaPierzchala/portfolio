import AnchorLink from "react-anchor-link-smooth-scroll";
import { PageType } from "../const";
import { capitalizeFirstLetter } from "../utils/string";

export type LinkProps = {
  page: PageType;
  selectedPage: PageType;
  setSelectedPage: (page: PageType) => void;
};

export const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  const pageName = capitalizeFirstLetter(page);
  return (
    <AnchorLink
      className={`${
        selectedPage === page ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {pageName}
    </AnchorLink>
  );
};
