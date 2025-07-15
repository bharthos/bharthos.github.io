"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  // Avoid animating on initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen"
      >
        {isMounted && children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
