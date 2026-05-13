"use client";

import { useEffect } from "react";

const useScriptReinit = () => {
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Trigger window load event to reinitialize scripts
      window.dispatchEvent(new Event("load"));
    }, 100);

    return () => clearTimeout(timer);
  }, []);
};

export default useScriptReinit;
