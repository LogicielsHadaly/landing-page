import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import ReportAutomation from '../../../public/ReportAutomation.svg';
import 'react-vertical-timeline-component/style.min.css';
import CustomVerticalTimeline from '../TimelineCustom';

const timelineData = [
  {
    date: "",
    title: "Data Ingestion",
    subtitle: "",
    description: "Our solution automates the data collection of multiple data sources, including stock exchanges, bond markets, and ETF providers. By establishing direct API connections and data feeds, we ensure the real-time retrieval of crucial market data such as report, news, pricing, and more. "
  },
  {
    date: "",
    title: "Data Cleaning",
    subtitle: "",
    description: "Our automated reporting system creates concise and customized summaries based on the unique requirements of each client. These reports included graphics and key metrics such as portfolio performance, asset allocation, sector analysis, and risk exposure. "
  },
  {
    date: "",
    title: "Insight Generation",
    subtitle: "",
    description: "Our solution provided real-time insights by continuously monitoring market movements, news, and financial indicators. By leveraging machine learning algorithms and sentiment analysis, we identified trends, market sentiment shifts, and potential investment opportunities. "
  },
  {
    date: "",
    title: "Data Governance",
    subtitle: "",
    description: "Our report automation system ensured compliance with regulatory requirements by incorporating necessary disclosures, risk assessments, and compliance checks. "
  },
  {
    date: "",
    title: "Outcomes",
    subtitle: "",
    description: "The implementation of report automation for stock, bonds, and ETFs yielded significant benefits for asset manager. It resulted in substantial time and cost savings by automating data ingestion and insights generation, allowing the client to focus on analysis, strategy formulation, and client servicing.  "
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
              Report Automation on Portfolio
            </h2>
            <p className="text-gray-600 text-lg">
              Report automation revolutionizes the way organizations handle data. By leveraging advanced technologies and data integration, it eliminates manual tasks, reduces errors, and enhances efficiency. It seamlessly retrieves data from multiple sources, automates cleaning and transformation, and generates tailored reports for valuable insights.
              <br /><br />
              With report automation, organizations can make informed decisions faster, save time, and stay competitive in the data-driven business landscape.    </p>
          </div>
        </SlideIn>
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
            <Image src={ReportAutomation} alt="chart" className="" />
          </div>
        </SlideIn>
      </div>


      <div className="bg-zinc-100 mt-12">
      <CustomVerticalTimeline timelineData={timelineData}  />
      </div>
      
    </SectionWrapper>
  );
};

export default reports;
