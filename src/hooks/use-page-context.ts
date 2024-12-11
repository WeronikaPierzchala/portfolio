import { createContext, useContext } from "react";
import { PageType } from "../const";

type PageContextProps = {
  selectedPage: PageType;
  setSelectedPage: (page: PageType) => void;
};

export const PageContext = createContext<PageContextProps | null>(null);

export const usePageContext = () => {
  const pageContext = useContext(PageContext);
  if (!pageContext) {
    throw new Error("useGetPageContext must be used within a Provider");
  }
  return pageContext;
};
