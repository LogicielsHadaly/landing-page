import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: 0},
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div ref={ref}>
      {React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{
            ease: "easeInOut",
            type: "spring",
            stiffness: 20,
            damping: 12,
            delay: i * 0.2 // Adds a slight delay between each child's animation
          }}
          variants={variants}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default FadeIn;