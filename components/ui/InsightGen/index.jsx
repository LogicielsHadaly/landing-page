import Image from 'next/image'
import SectionWrapper from "../../SectionWrapper"
import figInsight from "../../../public/fig_insight.svg"
import ForceGraph from "../Hero/ForceGraph"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const InsightGen = () => {
  return (
    <SectionWrapper
      id="cta"
      className="overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${figInsight.src})` }}
    >
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center mt-24 mb-24">

        {/* You can remove the following block if you don't want the image displayed on top of the background. */}
        <SlideIn>
          <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0 bg-gray-400 bg-opacity-30 p-4 rounded-xl shadow-lg">
            <h2 className="text-3xl sm:text-4xl">
              <span style={{ color: '#6366F1' }}>E</span>asy Formatting and Editing
            </h2>
            <p className="text-slate-900 text-lg">
            Draft your presentation materials with the help of our dashboard. It is customizable and easy to use. Hadaly helps you craft <strong>Teasers, CIMs and Presentation Memo</strong> through our solution. 
            </p>
          </div>
        </SlideIn>
        
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
            {/* <Image src={dataIngest} alt="chart" className="" /> */}
          </div>
        </SlideIn>

        
      </div>
    </SectionWrapper>
  )
}

export default InsightGen