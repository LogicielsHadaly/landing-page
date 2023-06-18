import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import house_graph from '../../../public/house-graph.svg';

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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const DecisionMaking = () => {
  return (
    <SectionWrapper id="cta" className="overflow-hidden">
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
            <Image src={house_graph} alt="chart" className="" />
          </div>
        </SlideIn>

        <SlideIn>
          <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-sky-950 text-3xl sm:text-4xl">
              Empowering Decision Making with Integrated Data Solutions
            </h2>
            <p className="text-gray-600">
              We understand that creating and managing portfolios can be a daunting task, requiring a significant amount of time and effort. With a wide range of portfolio types to choose from, including Risk, Stocks, Livestock, and Real Estate, our comprehensive platform unlocks the full potential of data-driven decision making.
              <br /><br />
              From data ingestion to insightful decision generation and data governance, our platform covers every aspect of the data collection value chain, allowing you to concentrate on what truly matters. Say goodbye to the complexities of portfolio management and embrace the power of informed decision making with Hadaly.
            </p>
          </div>
        </SlideIn>

      </div>
    </SectionWrapper>
  );
};

export default DecisionMaking;