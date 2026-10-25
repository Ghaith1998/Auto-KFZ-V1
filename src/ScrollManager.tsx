import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "./lib/scrollToHash";

export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        scrollToElement(target, "auto");
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash, key]);

  return null;
}
