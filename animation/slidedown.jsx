import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SlideDown = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
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
            stiffness: 50,
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

export default SlideDown;