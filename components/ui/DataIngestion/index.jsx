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
    hidden: { opacity: 0, x: 50 },
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
    <SectionWrapper
      id="cta"
      className="overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${dataIngest.src})` }}
    >
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center mt-24 mb-24">

        {/* You can remove the following block if you don't want the image displayed on top of the background. */}
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
          </div>
        </SlideIn>

        <SlideIn>
          <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0 bg-gray-200 bg-opacity-90 p-4 rounded-xl shadow-lg">
            <h2 className="text-3xl sm:text-4xl">
              <span style={{ color: '#6366F1' }}>E</span>nhance your Deal Screening
            </h2>
            <p className="text-slate-900 text-lg">
            Hadaly helps you understand your data room faster by letting you chat with  <strong>any document</strong> and get answers within seconds.

            </p>
          </div>
        </SlideIn>
      </div>
    </SectionWrapper>
  );
};

export default DataIngestion;


