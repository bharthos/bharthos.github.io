"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of experience",
    suffix: "+",
  },
  {
    num: 10,
    text: "Projects completed",
    suffix: "+",
  },
  {
    num: 25,
    text: "Technologies used",
    suffix: "+",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  suffix={item.suffix || ""}
                  className="text-4xl xl:text-6xl font-extrabold dark:text-white text-black"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug dark:text-white/80 text-black/70`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
