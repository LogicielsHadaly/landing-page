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
  return (<SectionWrapper id="cta" className="overflow-hidden">
    <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
      <SlideIn>
        <div className="flex-none w-full md:max-w-xl">
          <Image src={figInsight} alt="chart" className=' ' />
          {/* <ForceGraph /> */}
        </div>
      </SlideIn>
      <SlideIn>
        <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
          <h2 className="text-sky-950 text-3xl  sm:text-4xl">
            Insights Generation . Risk Assessment
          </h2>
          <p className="text-gray-600">
            Our advanced algorithms and powerful analytics enable us to extract valuable insights that range from price prediction and cash flow modeling to slice structuring and anomaly behavior detection. We firmly believe that every data point carries a significant meaning that can make a profound difference in your decision-making process.
          </p>

        </div>
      </SlideIn>


    </div>
  </SectionWrapper>)
}

export default InsightGen