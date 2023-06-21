import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import illustration from '../../../public/Risk_Mitigation.svg';
import 'react-vertical-timeline-component/style.min.css';
import CustomVerticalTimeline from '../TimelineCustom';

const timelineData = [
  {
    date: "",
    title: "Data Ingestion",
    subtitle: "",
    description: "Integration of structured and unstructured data, such as transactional data, customer e-mails, market reports, etc.  In this sector, it is common to see millions of transactions per year and thousands of unstructured data files. In this situation, natural language processing techniques have improved data collection time by 70%. "
  },
  {
    date: "",
    title: "Data Cleaning",
    subtitle: "",
    description: "Our advanced algorithms rectified inaccuracies and redundancies, improving data quality by over 85%. The cleaned and unified data provided a reliable basis for value estimation of the portfolio. "
  },
  {
    date: "",
    title: "Insight Generation",
    subtitle: "",
    description: "Identification of an over-concentration of risk in certain tranches of the client's securitization structure. For example, one specific tranche, supposedly low-risk, held a high-risk exposure of $10 million to a single volatile entity. Recommendation to redistribute assets across tranches, achieving a more balanced risk profile. "
  },
  {
    date: "",
    title: "Data Governance",
    subtitle: "",
    description: " Compliance verification of the recommandation with internal policy"
  },
  {
    date: "",
    title: "Outcomes",
    subtitle: "",
    description: " Reduction of risk exposure, optimization of tranche structuring, Real time mapping of the securitization process. This case study demonstrates the powerful impact of effective data management and risk mitigation strategies in achieving real-world, tangible benefits"
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

      <div className="bg-zinc-100 mt-12">
      <CustomVerticalTimeline timelineData={timelineData}  />
      </div>

    </SectionWrapper>
  );
};

export default reports;
 