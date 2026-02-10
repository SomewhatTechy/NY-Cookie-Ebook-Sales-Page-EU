import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  const preloaderText = useMemo(() => {
    const key = "preloaderText";
    const value = t(key);
    // If a translation key is missing, some i18n setups return the key itself.
    // Fall back to a safe default so PT/ES/EN never show raw keys.
    if (!value || value === key) return "Loading…";
    return value;
  }, [t]);

  useEffect(() => {
    let cancelled = false;

    const hide = () => {
      if (cancelled) return;
      setIsVisible(false);
    };

    // Fallback: always hide after 1600ms
    const fallbackTimer = window.setTimeout(hide, 1600);

    // Also hide when page is fully loaded
    const handleLoad = () => {
      window.setTimeout(hide, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "hsl(var(--vanilla))" }}
          role="status"
          aria-live="polite"
          aria-label={preloaderText}
        >
          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-chocolate mb-6"
          >
            {preloaderText}
          </motion.p>

          {/* Cookie animation bar */}
          <div className="flex gap-3 mb-6" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="text-4xl preloader-cookie"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                🍪
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div
            className="w-48 h-1 bg-muted rounded-full mt-4 overflow-hidden"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={t("offerEndsIn") || "Loading progress"}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="h-full rounded-full"
              style={{ background: "var(--gradient-cta)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
