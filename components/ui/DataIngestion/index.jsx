import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import dataIngest from '../../../public/dataingest.svg';

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

const DataIngestion = () => {
  return (
    <SectionWrapper id="cta" className="overflow-hidden">
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <SlideIn>
          <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-sky-950 text-3xl sm:text-4xl">
              Data Ingestion . Cleaning
            </h2>
            <p className="text-gray-800">
              At Hadaly, we employ a meticulous process that ensures maximum extraction of valuable information from your data. The first crucial step in this process is data ingestion. Our advanced techniques enable us to classify, cleanse, and transform different types of data using our API. Whether PDF documents, voice recordings, video files, Excel spreadsheets, or any other format, our technology can process them seamlessly.
            </p>
          </div>
        </SlideIn>
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
            <Image src={dataIngest} alt="chart" className="" />
          </div>
        </SlideIn>

      </div>
    </SectionWrapper>
  );
};

export default DataIngestion;
