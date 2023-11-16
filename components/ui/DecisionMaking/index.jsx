import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import problem from '../../../public/problem.svg';
import NavLink from "../NavLink";
import Button from '../Button';
import CardVideo from '../Card';
import SlideLeft from '../../../animation/slideleft';
import SlideRight from '../../../animation/slideright';
import FadeIn from '../../../animation/fadein';


const DecisionMaking = () => {

  return (
    <SectionWrapper id="main" className=" justify-between space-y-3 bg-indigo-50 bg-opacity-50 overflow-x-hidden ">
      <div className='text-center mb-12'>
        <h1 className="text-3xl text-gray-800 sm:text-4xl px-4 md:px-8 ">
        Supercharge Deal Making Using Ai 
        </h1>
      </div>

      <div className="  justify-center flex flex-col md:flex-row md:items-center max-w-screen-4xl mx-auto px-4 md:px-8">

        {/* Left Text Section */}
        <SlideLeft>
          <div className=" flex-1 md:px-24 px-16 space-y-3">
            <CardVideo
              title="Startup and SMEs"
              onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
              info="Unlock the potential of a good DataRoom"
              Video={"/video/video_startup.gif"}
            >
            </CardVideo>

          </div>
        </SlideLeft>



        {/* Middle GIF Section */}
        <FadeIn>
          <div className="px-4 justify-center mx-auto   mt-8 md:mt-32">
            <img src={"/video/main_video.gif"} alt="Your GIF" className=" w-full   h-auto  shadow-xl rounded-b-lg rounded-tl-3xl md:mt-4 mt-48" />
            <h2 className="text-center md:text-2xl text-3xl font-bold mb-2 mt-8">Hadaly’s Engine</h2>
            <p className='max-w-md text-lg text-gray-500 md:mt-4 md:mb-8 md:mb-8 md:mt-4  mt-4 mb-48 mx-auto text-center'>We help reduce the underlying risks in the data room for the due diligence process.</p>
          </div>
        </FadeIn>

        {/* Right Text Section */}
        <SlideRight>
          <div className="flex-1 md:px-24 px-16 space-y-3">
            <CardVideo
              title="Advisors"
              onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
              info="Generate Fast Red Flag Report"
              Video={"/video/video_startup.gif"}
            >
            </CardVideo>
          </div>
        </SlideRight>
      </div>


    </SectionWrapper>
  );
};

export default DecisionMaking;
