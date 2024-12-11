import AnchorLink from "react-anchor-link-smooth-scroll";
import { PAGES, PageType } from "../const";
import { usePageContext } from "../hooks";

export const DotGroup = () => {
  const { selectedPage, setSelectedPage } = usePageContext();

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {Object.values(PAGES).map((page: PageType) => (
        <DotLink
          key={page}
          page={page}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </div>
  );
};

type DotLinkProps = {
  page: PageType;
  selectedPage: PageType;
  setSelectedPage: (page: PageType) => void;
};

const DotLink = ({ page, selectedPage, setSelectedPage }: DotLinkProps) => {
  const selectedStyles =
    "relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]";

  return (
    <AnchorLink
      className={`${
        selectedPage === page ? selectedStyles : "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    />
  );
};
