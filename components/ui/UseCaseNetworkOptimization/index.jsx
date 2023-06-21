import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import ForceGraph from "../Hero/ForceGraph"
import 'react-vertical-timeline-component/style.min.css';
import CustomVerticalTimeline from '../TimelineCustom';

const timelineData = [
  {
    date: "",
    title: "Data Ingestion",
    subtitle: "",
    description: "Ingestion of structured and unstructured data from the client's real estate portfolio, including property details, rental agreements, tenant feedback, and market reports. Utilizing API-based extraction and Natural Language Processing techniques, data from these various sources was collected efficiently, achieving a reduction in data collection time by approximately 65%. "
  },
  {
    date: "",
    title: "Data Cleaning",
    subtitle: "",
    description: "The collated data, laden with inconsistencies and redundancies, was subjected to a thorough data cleaning process. Employing sophisticated algorithms, the data quality was improved by over 80%, thereby ensuring a reliable foundation for comprehensive analysis."
  },
  {
    date: "",
    title: "Insight Generation",
    subtitle: "",
    description: "The harmonized data was analyzed using machine learning algorithms, which generated insightful findings. One significant insight involved identifying properties with high maintenance costs but low tenant satisfaction rates. For instance, a property in the client's portfolio was found to have maintenance costs exceeding 20% of the rental income, but had a tenant satisfaction score of below 50%. This led the client to reconsider investments and resource allocation to these properties, favoring those with a better cost-to-satisfaction ratio. "
  },
  {
    date: "",
    title: "Data Governance",
    subtitle: "",
    description: "Implementing a robust data governance framework was the final step, which enhanced data security and reduced the incidence of data breaches by 35%. Moreover, the appointment of a Data Governance Officer ensured continual oversight and accountable management of the client's data usage and security. "
  },
  {
    date: "",
    title: "Outcomes",
    subtitle: "",
    description: "Through the application of a comprehensive, data-driven approach, the project was able to optimize their real estate network, achieving improved portfolio performance, increased tenant satisfaction, and reduced operational costs. This case study demonstrates the tangible, real-world benefits of effective data management and network optimization strategies in the real estate sector.  "
  },
];

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

      <div className="bg-zinc-100 mt-12">
      <CustomVerticalTimeline timelineData={timelineData}  />
      </div>


    </SectionWrapper>
  );
};

export default reports;
 