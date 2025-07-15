"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Project Data
const projects = [
  {
    num: "01",
    title: "EcoQueryAI",
    description: "EcoQueryAI is a modular climate intelligence platform that empowers users to ask questions about the planet — and get smart, explainable answers. Powered by ClimateGPT and real datasets from ERA5, NOAA, FEMA, and EDGAR, it turns natural language into structured insights on weather, emissions, and disasters. From predicting AQI to mapping CO₂ intensity or FEMA fund flow, TerraSage combines big data, satellite records, and AI to help humans reason about Earth’s systems — one query at a time.",
    stack: [
      { name: "Python" }, { name: "Docker" }, { name: "SQLite" },
      { name: "ClimateGPT" }, { name: "MCP Protocol" }, { name: "FastAPI" },
      { name: "Jupyter" }, { name: "Spacy" }
    ],
    images: ["/assets/work/terrasage-preview.jpg"],
    github: "https://github.com/bharthos/EcoQueryAI-Climate-Insight-Data-Reasoning-Engine"
  },
  {
    num: "02",
    title: "BrainSight AI: Tumor Detection & Chatbot",
    description: "BrainSight AI is a smart dual-engine medical tool that detects brain tumors using CNN models (VGG16, DenseNet) and powers a real-time symptom chatbot with LLMs. Built with Flask, JavaScript, and TensorFlow, it delivers accurate image diagnosis and NLP-based consultations, making it a robust full-stack AI healthcare solution.",
    stack: [
      { name: "TensorFlow" }, { name: "PyTorch" }, { name: "Flask" },
      { name: "JavaScript" }, { name: "Python" }, { name: "Bash" },
      { name: "VGG16/VGG19" }, { name: "DenseNet" }, { name: "LLM / NLP" }
    ],
    images: ["/assets/work/brainsight-preview1.jpg"],
    github: "https://github.com/bharthos/BrainSight-AI-Tumor-Detection-Chatbot"
  },
  {
  num: "03",
  title: "FitnessSensorApp",
  description:
    "FitnessSensorApp is a Kotlin-based Android app that empowers users to calculate BMI and explore personalized fitness tools. It features a clean UI, splash screen, activity tracking, and interactive tiles for coaching and yoga. Built for simplicity and future expandability.",
  stack: [
    { name: "Kotlin" },
    { name: "Android Studio" },
    { name: "Gradle 8.0+" },
    { name: "Android SDK 33+" }
  ],
  images: ["/assets/work/fitnesssensor-preview.png"],  // replace with your actual image
  github: "https://github.com/bharthos/FitnessSensorApp.git"
},
  {
    num: "04",
    title: "LoanWise",
    description: "LoanWise is a smart ML-powered platform that predicts loan approvals using real-world borrower attributes like income, credit history, and loan intent. It combines Logistic Regression, Random Forest, and XGBoost with ensemble learning to improve decision-making and reduce financial risk.",
    stack: [
      { name: "Python" }, { name: "Scikit-learn" }, { name: "XGBoost" },
      { name: "Flask" }, { name: "HTML/CSS" }, { name: "Pandas" },
      { name: "Matplotlib" }, { name: "Ensemble ML" },
    ],
    images: ["/assets/work/loanwise-preview.jpg"],
    github: ""
  },
  {
    num: "05",
    title: "AirScanAI",
    description: "AirScanAI is a futuristic air quality intelligence system that fuses big data and machine learning to predict AQI levels with uncanny precision. It integrates real-time sensor streams, meteorological inputs, and geospatial awareness to forecast environmental conditions — enabling proactive health interventions and smarter urban planning.",
    stack: [
      { name: "Python" }, { name: "Apache Spark" }, { name: "Kafka" },
      { name: "MLlib" }, { name: "Scala" }, { name: "Flask" },
      { name: "Airflow" }, { name: "React" }, { name: "MongoDB" }
    ],
    images: ["/assets/work/airscanai-preview.jpg"],
    github: "",
    fitMode: "contain"
  },
  {
    num: "06",
    title: "CricketIQ",
    description: "Machine learning-powered T20I match outcome predictor using weather, venue, and home advantage analytics with Random Forests.",
    stack: [
      { name: "Python" }, { name: "Scikit-learn" }, { name: "SQL" },
      { name: "R" }, { name: "Seaborn" },
    ],
    images: ["/assets/work/cricketiq-chart.jpg"],
    github: "",
    fitMode: "contain"
  }
];

const Work = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const project = projects[projectIndex];

  useEffect(() => {
    const images = project.images || [];
    if (images.length > 1) {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [project.images]);

  const handleSlideChange = (swiper) => {
    setProjectIndex(swiper.activeIndex);
    setImageIndex(0);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[60vh] flex flex-col justify-start pt-6 pb-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-between">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-black dark:text-white">
                {project.title}
              </h2>
              <p className="text-black/70 dark:text-white/60">{project.description}</p>

              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, i) => (
                  <li key={i} className="text-xl text-accent">
                    {item.name}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-black/10 dark:border-white/20"></div>

              {project.github && (
                <div className="flex items-center gap-4">
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white dark:bg-white/5 flex justify-center items-center group shadow-sm">
                          <BsGithub className="text-black dark:text-white text-3xl group-hover:text-accent transition-all" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-black/5 dark:bg-white/5">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 dark:bg-white/10 z-10"></div>
                    <div className="relative w-full h-full overflow-hidden rounded-md">
                      <motion.div
                        key={imageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-full h-full"
                      >
                        <Image
                          src={
                            projects[index].images?.[imageIndex] ||
                            projects[index].images?.[0] ||
                            "/assets/default.png"
                          }
                          alt={projects[index].title}
                          fill
                          className="object-cover"
                          style={{ objectPosition: "top left" }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
