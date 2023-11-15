import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import problem from '../../../public/problem.svg';
import NavLink from "../NavLink";
import Button from '../Button';
import Card from '../Card';
import SlideLeft from '../../../animation/slideleft';
import SlideRight from '../../../animation/slideright';
import FadeIn from '../../../animation/fadein';


const DecisionMaking = () => {

  return (
    <SectionWrapper id="main" className="custom-screen overflow-hidden  bg-indigo-50 bg-opacity-50 mx-auto ">
      <div className='text-center mb-12'>
        <h1 className="text-3xl text-gray-800 sm:text-4xl">
          Your Due Diligence Copilot to Rapidly Assess Deal Red Flag
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:items-center max-w-screen-2xl mx-auto px-4 md:px-8">

        {/* Left Text Section */}
        <SlideLeft>
          <div className="flex-1 max-w-3xl space-y-3">
            <Card
              title="Startup and SMEs"
              onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
              info="Unlock the potential of a good DataRoom"
            >
            </Card>
          </div>
        </SlideLeft>



        {/* Middle GIF Section */}
        <FadeIn>
          <div className="px-8 justify-center mx-auto  md:max-w-4xl mt-8 md:mt-32">
            <img src="/main_video.gif" alt="Your GIF" className=" w-full   h-auto  shadow-xl rounded-b-lg rounded-tl-3xl" />
            <h2 className="text-center text-2xl font-bold mb-2 mt-8">Hadaly’s Engine</h2>
            <p className='max-w-md text-lg text-gray-500 mt-4 mb-2 mx-auto text-center'>We help reduce the underlying risks in the data room for the due diligence process.</p>
          </div>
        </FadeIn>

        {/* Right Text Section */}
        <SlideRight>
          <div className="flex-1 max-w-xl space-y-3">
            <Card
              title="Advisors"
              onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
              info="Generate Fast Red Flag Report"
            >
            </Card>
          </div>
        </SlideRight>
      </div>


    </SectionWrapper>
  );
};

export default DecisionMaking;
