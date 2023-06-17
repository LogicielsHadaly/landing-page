import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import ReportAutomation from '../../../public/ReportAutomation.svg';

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
              Anomaly Detection on Portfolio 
            </h2>
            <p className="text-gray-600">
            Anomaly detection plays a crucial role in data analysis, opening doors to untapped revenue streams and exciting possibilities. Let us illustrate the power of our technology through a real-life use case.
Consider the challenge of animal traceability. 
   <br/><br/>
   Our platform identified a recurring anomaly: breeders were reusing unique animal tracking chips multiple times. This practice raised concerns about accurate tracking and data integrity. However, our solution stepped in to address this issue effectively.   </p>
          </div>
        </SlideIn>
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
            <Image src={ReportAutomation} alt="chart" className="" />
          </div>
        </SlideIn>
      </div>
    </SectionWrapper>
  );
};

export default reports;
 