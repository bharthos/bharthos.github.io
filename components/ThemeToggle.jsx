"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 px-4 py-2 border border-accent rounded-full hover:bg-accent hover:text-primary transition"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      <span className="text-sm capitalize">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ThemeToggle;
