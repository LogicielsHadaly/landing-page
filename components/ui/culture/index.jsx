import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import ReportAutomation from '../../../public/ReportAutomation.svg';

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
      <div className="flex-none w-full md:max-w-xl">
        <Image src="/animation.svg" width={800} height={200} alt="chart" className="rounded-lg shadow-xl" />
      </div>
    </SlideIn>
    <SlideIn>
      <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
        <h2 className="text-sky-950 text-3xl sm:text-4xl">
          Our Culture
        </h2>
        <h3 className="text-sky-950 text-2xl sm:text-3xl">
          Innovation
        </h3>
        <p className="text-gray-600">
          Our work thrives on fresh ideas and forward thinking. We foster a culture where each team member is encouraged to think outside the box and challenge the status quo.
        </p>
        <h3 className="text-sky-950 text-2xl sm:text-3xl">
          Collaboration
        </h3>
        <p className="text-gray-600">
          Our team operates in a space of mutual respect and open communication, promoting cross-departmental collaboration for delivering streamlined solutions.
        </p>
        <h3 className="text-sky-950 text-2xl sm:text-3xl">
          Continuous Learning
        </h3>
        <p className="text-gray-600">
          We place a high value on professional development and growth. Our partnerships with top Canadian universities allow our team members to access advanced training and research opportunities.
        </p>
        <h3 className="text-sky-950 text-2xl sm:text-3xl">
          Balance and Well Being
        </h3>
        <p className="text-gray-600">
          We promote work-life balance and well-being through flexible work arrangements and comprehensive wellness programs.
        </p>
        <h3 className="text-sky-950 text-2xl sm:text-3xl">
          Diversity and Inclusion
        </h3>
        <p className="text-gray-600">
          We embrace diversity and inclusion as integral elements of our culture, celebrating the unique experiences and perspectives that our team members bring.
        </p>
      </div>
    </SlideIn>
  </div>
</SectionWrapper>
);
};


export default reports;
 


