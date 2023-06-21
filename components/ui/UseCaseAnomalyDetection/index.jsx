import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import illustration from '../../../public/AnomalyDetection.svg';
import 'react-vertical-timeline-component/style.min.css';
import CustomVerticalTimeline from '../TimelineCustom';

const timelineData = [
  {
    date: "",
    title: "Data Ingestion",
    subtitle: "",
    description: "We collect data on movements, age, size, contamination (date, disease), production (number of births, in paddocks, etc.), and more. Our platform handles both structured and unstructured data, ensuring that no valuable insights are missed.  "
  },
  {
    date: "",
    title: "Data Cleaning",
    subtitle: "",
    description: "Our platform classify all the Excel sheets and transform any unstructured data, such as PDFs, videos, and phone call records, into a structured format, resembling a comprehensive report. We meticulously extract and record all the important numbers in a reliable database.  "
  },
  {
    date: "",
    title: "Insight Generation",
    subtitle: "",
    description: "Generation of insights such as flow mapping, process mining, price prediction, and slicing the portfolio into behavioral segments based on location, price evolution, and life expectancy. "
  },
  {
    date: "",
    title: "Anomaly Detection",
    subtitle: "",
    description: "Detection of abnormal behavior, such as epidemic center, animals sold under-valued, unexpected mortality."
  },
  {
    date: "",
    title: "Outcomes",
    subtitle: "",
    description: "In this case study, our platform was able to perform price prediction and anomaly detection to identify portfolio real value, uncover new opportunities and prevent potential risks, such as disease outbreaks. "
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
 