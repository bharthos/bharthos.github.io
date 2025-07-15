import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 transition-colors duration-40 bg-transparent text-black dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Bharath<span className="text-accent">.</span>
          </h1>
          <span className="text-sm mt-1 text-muted dark:text-white/70">
          Debug. Deploy. Repeat.
        </span>
        </Link>

        {/* ✅ desktop nav + toggle + hire me */}
        <div className="hidden xl:flex items-center gap-4">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
