import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {/* Blob animation (optional) stays here... */}

      {/* Tilted image */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        scale={1.05}
        transitionSpeed={1000}
        className="relative z-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          className="relative w-[280px] h-[280px] xl:w-[420px] xl:h-[420px]"
        >
          <Image
            src="/assets/IMG_3874_1.png"
            alt="Bharath Raju KM"
            fill
            className="object-contain"
            quality={100}
            priority
          />
        </motion.div>
      </Tilt>
    </div>
  );
};

export default Photo;
