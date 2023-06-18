import Image from 'next/image';
import SectionWrapper from '../../SectionWrapper';
import figmonitor from '../../../public/monitor.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SlideIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
      {children}
    </motion.div>
  );
};

const bright = () => {
  const imageVariants = {
    hover: {
      scale: 1.1,
      filter: 'brightness(120%)',
      transition: { duration: 0.3 },
    },
    initial: {
      scale: 1,
      filter: 'brightness(100%)',
    },
  };

  return (
    <SectionWrapper id="cta" className="overflow-hidden">
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <SlideIn>
          <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-sky-950 text-3xl sm:text-4xl">Data Governance . Perfomance Monitoring</h2>
            <p className="text-gray-600">
              We bring real-time event monitoring to your hand, ensuring you stay informed about potential impacts as they
              unfold. Whether it's an epidemic outbreak, an economic event, or a sudden rise in interest rates, our system
              keeps a vigilant eye on these developments based on your need. By providing timely alerts, we empower you to
              proactively assess potential consequences and take necessary measures to mitigate risks. Moreover, these alerts
              serve as valuable indicators to explore new opportunities and discover innovative solutions.
            </p>
          </div>
        </SlideIn>
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
            <motion.div whileHover="hover" initial="initial" variants={imageVariants}>
              <Image src={figmonitor} alt="chart" className="image" />
            </motion.div>
          </div>
        </SlideIn>

      </div>
    </SectionWrapper>
  );
};

export default bright;
