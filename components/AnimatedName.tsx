"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const AnimatedName = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className="text-center"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.p className="text-2xl text-primary/80 mb-2" variants={letterVariants}>
        Hi there! I am
      </motion.p>
      <motion.h1 className="text-4xl md:text-5xl font-bold mb-6">
        {["Abdurrahman", "Adenowo"].map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char, index) => (
              <motion.span key={`${wordIndex}-${index}`} variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
            {wordIndex === 0 && " "}
          </span>
        ))}
      </motion.h1>
    </motion.div>
  )
}

export default AnimatedName

