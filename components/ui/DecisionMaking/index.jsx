import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import problem from '../../../public/problem.svg';
import NavLink from "../NavLink";

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

const DecisionMaking = () => {
  return (
    <SectionWrapper id="cta" className="overflow-hidden">
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-center items-center md:flex-row md:items-center">
        
      <SlideIn>
          <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-sky-950 text-3xl sm:text-4xl">
              Supercharge Deal Making with AI
            </h2>
            <p className="text-gray-600 text-lg">
            Hadaly streamlines the due diligence process for <strong>Buy side & Sell side</strong> firms. Our platform reduces the time spent on due diligence by 60% allowing the deal team to focus on the essentials.
              {/* Hadaly enables efficient management of diverse portfolios, including risk, stocks, livestock, and real estate. Our platform simplifies data pipelines, from data ingestion to data governance, facilitating informed decision-making. */}
            </p>
          </div>
          <NavLink
            href="https://calendly.com/hadaly"
            className="flex items-center justify-center gap-x-1text-xl text-white font-medium bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline-flex px-4 py-2 rounded-md mt-5"
          >
            Book an Assessment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>

        </SlideIn>
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
            <div className="h-[100%] flex items-center justify-center">
              <Image src={problem} alt="chart" className="max-h-[100%] max-w-[100%]" />
            </div>
          </div>
        </SlideIn>


      </div>
    </SectionWrapper>
  );
};

export default DecisionMaking;





