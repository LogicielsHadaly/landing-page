import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import Link from 'next/link';

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
              Our Team 
            </h2>
            <p className="text-gray-600 text-lg">
            
Our company is a dynamic blend of financial and technological expertise, dedicated to streamlining the portfolio management process through innovation. We've fostered strategic partnerships with top Canadian universities to ensure our solutions leverage the latest research and development advancements. This commitment to growth, innovation, and our team allows us to consistently refine our offerings.
   <br/><br/>
   Are you passionate about Fintech and excited about transforming portfolio management? If so, we're always keen to meet potential team members who can bring fresh perspectives. 
   <br/><br/>
    Express your interest and share your profiles at {" "} 
    
    <Link href="" className="text-blue-950 font-bold" >
    info@hadaly.ca
       </Link>
        . We look forward to shaping the future of portfolio management with you.
      </p>
          </div>
        </SlideIn>
        <SlideIn>
          <div className="flex-none w-full md:max-w-xl">
            <Image src="/hadaly_only_logo.svg" width={300} height={200}  alt="chart" className="" />
          </div>
        </SlideIn>
      </div>
    </SectionWrapper>
  );
};

export default reports;
 