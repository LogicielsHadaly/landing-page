import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import ForceGraph from "../Hero/ForceGraph"

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
              Network Optimization on Portfolio 
            </h2>
            <p className="text-gray-600 text-lg">
            Across industries - finance, payment systems, real estate, agriculture, and production - network optimization plays a pivotal role. Our tool delivers crucial insights into portfolios of complex network assets. It sheds light on performance metrics, identifying the most and least efficient nodes. 
   <br/><br/>
      conducting a thorough risk analysis, it pinpoints potential vulnerabilities, offering strategies for mitigation. The tool also highlights network bottlenecks and suggests optimal paths for data flow, thus maximizing network efficiency. 
      <br/><br/>
      Beyond current operations, it utilizes historical data to forecast future network performance and capacity needs. This comprehensive approach allows for proactive management, driving efficiency, and optimizing return on investment in network portfolios. </p>
          </div>
        </SlideIn>
        {/* <SlideIn> */}
          <div className="flex-none w-full md:max-w-xl">
            {/* <Image src={ReportAutomation} alt="chart" className="" /> */}
            <ForceGraph />
          </div>
        {/* </SlideIn> */}
      </div>
    </SectionWrapper>
  );
};

export default reports;
 