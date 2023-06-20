import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import illustration from '../../../public/Risk_Mitigation.svg';

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

const reports = () => {
  return (
    <SectionWrapper id="cta" className="overflow-hidden">
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <SlideIn>
          <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-sky-950 text-3xl sm:text-4xl">
              Risk Mitigation on Portfolio 
            </h2>
            <p className="text-gray-600">
            Navigating the complexities of risk in the private securitization industry presents a significant challenge.This use case describe the management of risk within the securitization processes to refine risk identification, enhance processing efficiency, and improve tranche structuring. 
   <br/><br/>
   Through a meticulous and data-driven approach, tangible improvements were realized. </p>
          </div>
        </SlideIn>
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
            <Image src={illustration} alt="chart" className="" />
          </div>
        </SlideIn>
      </div>
    </SectionWrapper>
  );
};

export default reports;
 