import React from "react";
import { motion } from "framer-motion";

const SlideInTextAnimation = ({ text = "Default text" }) => {
  // Split the text into individual words
  const words = String(text).split(" ");

  // Container variant for the entire text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Variants for words coming from left and right
  const wordVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -40 : 40, // Even indices come from left, odd from right
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-2"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SlideInTextAnimation;
