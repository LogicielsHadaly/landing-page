import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import dataIngest from '../../../public/dataingest.svg';
import Button from '../Button';

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
      className="max-w-screen-xl mx-auto"
    >
      <div className="   custom-screen flex flex-col-reverse gap-x-6 justify-between md:flex-row md:items-center   px-4 md:px-8">
        
      <SlideIn>
        <div className="px-8 justify-center mx-auto  ">
            <img src="/main_video.gif" alt="Your GIF" className=" w-full   h-auto  shadow-xl rounded-b-lg rounded-tl-3xl" />
          </div>
        </SlideIn>
        
        <SlideIn>
          <div className="flex-none  mt-12 space-y-3 md:mt-0  p-4  ">
            <h2 className="text-3xl sm:text-4xl text-indigo-950">
            Build Qualitative Data Room
            </h2>
            <p className="text-slate-900 text-lg">
            Because your Data Room mirrors your company organization, We make sure to identify potential risks in your Data Room for your company to stay well Organized and always prepared for future fundraising and aqcuisitions.
            </p>

            <ul class=" pl-0 py-4 text-lg font-bold">
              <li class="customli">Upload or start building your Data Room</li>
              <li class="customli">Detect Upfront Missing Documents</li>
              <li class="customli">Improve your Data Room Quality Scoring</li>
            </ul>


            <p className="text-indigo-400 text-md font-bold">
            For Startup & SME
            </p>
            <Button
              onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
              className=" mt-12 group flex items-center justify-center gap-x-1 text-xl font-medium bg-indigo-950 text-white hover:bg-opacity-90 md:inline-flex px-4 py-4"
            >
              Tell me more
              <span className="transition-transform duration-300 transform group-hover:scale-125 text-indigo-400  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>

              </span>
            </Button>

            <p className="text-indigo-900 text-xl font-bold underline">
            Download Your Personal Data Room Check List
            </p>
          </div>
        </SlideIn>

        {/* You can remove the following block if you don't want the image displayed on top of the background. */}

      </div>
    </SectionWrapper>
  );
};

export default DataIngestion;

