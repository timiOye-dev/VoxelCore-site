import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  scrollToSectionWhenReady,
  scrollToTop,
} from "../utils/scroll";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (hash) {
      const sectionId = hash.slice(1);
      scrollToSectionWhenReady(sectionId);
      return;
    }

    scrollToTop();
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
