import AnchorLink from "react-anchor-link-smooth-scroll";

export type LinkProps = {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

export const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  const currentPage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === currentPage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${currentPage}`}
      onClick={() => setSelectedPage(currentPage)}
    >
      {page}
    </AnchorLink>
  );
};
