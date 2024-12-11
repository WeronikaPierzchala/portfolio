import { useRef, useEffect } from "react";
import { useInView } from "motion/react";
import { PageType } from "../const";
import { usePageContext } from "./use-page-context";

export const useIsPageInView = (page: PageType) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { setSelectedPage } = usePageContext();

  useEffect(() => {
    if (isInView) {
      setSelectedPage(page);
    }
  }, [isInView, page, setSelectedPage]);

  return ref;
};
