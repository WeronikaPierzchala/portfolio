import { useRef, useEffect } from "react";
import { useInView } from "motion/react";
import { PageType } from "../const";
import { usePageContext } from "./use-page-context";
import { useMediaQuery } from "./use-media-query";

export const useIsPageInView = (page: PageType) => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("md");
  const isLarge = useMediaQuery("xl");
  const amountInView = isMobile ? 0.5 : isLarge ? 0.7 : "all";

  const isInView = useInView(ref, { amount: amountInView });
  const { setSelectedPage } = usePageContext();

  useEffect(() => {
    if (isInView) {
      setSelectedPage(page);
    }
  }, [isInView, page, setSelectedPage]);

  return ref;
};
