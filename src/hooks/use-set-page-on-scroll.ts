import { useEffect } from "react";
import { debounce } from "src/utils/debounce";
import { isElementVisible } from "src/utils/element-visible";
import { PageType } from "../const";

export const useSetPageOnScroll = (
  setSelectedPage: (page: PageType) => void
) => {
  useEffect(() => {
    const skills = document.getElementById("skills");
    const project = document.getElementById("projects");
    const contact = document.getElementById("contact");

    const manageScroll = debounce(() => {
      if (isElementVisible(skills)) {
        return setSelectedPage("skills");
      }
      if (isElementVisible(project)) {
        return setSelectedPage("projects");
      }
      if (isElementVisible(contact)) {
        return setSelectedPage("contact");
      }
    });
    document.addEventListener("scroll", manageScroll);
    return () => document.addEventListener("scroll", manageScroll);
  }, [setSelectedPage]);
};
