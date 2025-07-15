"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description:
      "Experience building scalable web apps using React, Node.js, Next.js, and REST APIs with a focus on performance and modular architecture.",
    href: "",
  },
  {
    num: "02",
    title: "Cloud & DevOps Engineering",
    description:
      "Skilled in AWS, Docker, Kubernetes, and CI/CD pipelines using Jenkins and Terraform to automate and deploy infrastructure and apps efficiently.",
    href: "",
  },
  {
    num: "03",
    title: "Data Analytics & Data Engineering",
    description:
      "Hands-on experience in designing ETL pipelines, transforming data using Python and SQL, and optimizing queries for efficient reporting and insights.",
    href: "",
  },
  {
    num: "04",
    title: "AI/ML Engineering",
    description:
      "Proficient in building and deploying machine learning models using TensorFlow, PyTorch, and NLP techniques to solve real-world problems with data.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                {/* number */}
                <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                  {service.num}
                </div>

                {/* arrow button */}
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full 
                    bg-black text-white 
                    dark:bg-white dark:text-black 
                    group-hover:bg-accent 
                    transition-all duration-500 
                    flex justify-center items-center 
                    hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-3xl" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-black dark:text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-black/70 dark:text-white/60">
                {service.description}
              </p>

              {/* border */}
              <div className="border-b border-black/10 dark:border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
