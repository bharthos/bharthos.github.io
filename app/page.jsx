"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark transition-colors duration-300">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <motion.div
            className="text-center xl:text-left order-2 xl:order-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-lg text-accent mb-2 inline-block">
              Curious, committed, and ready to join your team.
            </span>

            <h1 className="h1 mb-6">
              Hello, I’m{" "}
              <span className="text-accent block">
                <TypeAnimation
                  sequence={[
                    "Bharath Raju K.M",
                    1500,
                    "a Full-Stack Developer",
                    1500,
                    "a Cloud Engineer",
                    1500,
                    "a Curious Technologist",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="max-w-[520px] mb-9 mx-auto xl:mx-0 text-muted dark:text-muted-dark">
              I'm a problem-solver at heart who enjoys building performant,
              scalable systems with delightful user experiences — from front-end
              to DevOps pipelines.
            </p>

            {/* buttons & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <a
                href="/BharathRajuKM.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="flex gap-2 items-center">
                  Download Resume <FiDownload className="text-xl" />
                </Button>
              </a>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
