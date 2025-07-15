
"use client";

import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "Who Am I?",
  description:
    "Hey, I’m Bharath - part-time coder, full-time curious human. I enjoy figuring out how things work, breaking them (sometimes accidentally), and then putting them back together better than before.",
  info: [
    { fieldName: "Name", fieldValue: "Bharath Raju KM" },
    { fieldName: "Phone", fieldValue: "+1 (571) 604-0717" },
    { fieldName: "Experience", fieldValue: "4+ Years" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "bharthos8@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Kannada, Telugu, Hindi" },
  ],
};

const experience = {
  title: "My experience",
  description:
    "Over the past few years, I’ve bounced between roles that challenged me, taught me a lot, and let me build some cool stuff...",
  items: [
    {
      company: "GMU CEC",
      position: "Full-Stack Developer",
      duration: "Nov 2023 - May 2025",
    },
    {
      company: "NTT DATA",
      position: "Software Engineer II",
      duration: "Apr 2022 – Jun 2023",
    },
    {
      company: "NTT DATA",
      position: "Software Engineer I",
      duration: "Oct 2020 – Apr 2022",
    },
    {
      company: "CBS Innovations",
      position: "Full Stack Developer Intern",
      duration: "Apr-2019 May-2019",
    },
  ],
};

const education = {
  title: "My education",
  description:
    "From building a solid base in computer science to diving deep into data-driven solutions...",
  items: [
    {
      institution: "George Mason University",
      degree: "MS in Data Analytics Engineering",
      duration: "Aug 2023 – May 2025",
    },
    {
      institution: "Atria Institute of Technology",
      degree: "B. Tech in Computer Science Engineering",
      duration: "Aug 2016 – Jul 2020",
    },
    {
      institution: "Deeksha Centre For Learning ",
      degree: "XII (Senior Secondary)",
      duration: "2014 - 2016",
    },
    {
      institution: "MSFNA",
      degree: "X (SECONDARY)",
      duration: "2014",
    },
  ],
};

const skills = {
  title: "Skills Matrix",
  description:
    "A categorized snapshot of my technical toolbox, spanning languages, frameworks, cloud, DevOps, and data ecosystems.",
  categories: [
    {
      name: "Languages",
      items: ["Python", "Java", "SQL", "JavaScript", "Bash", "HTML5", "CSS3", "Kotlin", "R"],
    },
    {
      name: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Figma"],
    },
    {
      name: "Backend & APIs",
      items: ["Node.js", "Flask", "Django", "FastAPI", "REST APIs"],
    },
    {
      name: "Cloud & DevOps",
      items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "Airflow", "Git"],
    },
    {
      name: "Data Science & ML",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "NLP", "Pandas", "NumPy", "Matplotlib", "Seaborn", "LLMs"],
    },
    {
      name: "Big Data & Engineering",
      items: ["Apache Spark", "Kafka", "MongoDB", "ETL", "Data Pipelines", "MCP Protocol"],
    },
    {
      name: "Databases",
      items: ["PostgreSQL", "MySQL", "SQLite", "NoSQL", "MongoDB"],
    },
    {
      name: "Tools & Platforms",
      items: ["Jupyter", "GitHub", "Linux", "VSCode", "Heroku"],
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark transition-colors duration-300"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-muted mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-card h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          <p className="text-muted">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-muted mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-card h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          <p className="text-muted">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-muted mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {skills.categories.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-semibold text-accent mb-2">{category.name}</h4>
                      <ul className="flex flex-wrap gap-2">
                        {category.items.map((item, i) => (
                          <TooltipProvider key={i} delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="bg-card px-3 py-1 rounded-full text-sm text-muted hover:bg-accent hover:text-primary transition">
                                {item}
                              </TooltipTrigger>
                              <TooltipContent><p>{item}</p></TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-muted mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-muted">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
