import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import Button from '../Button';
import SlideLeft from '../../../animation/slideleft';
import SlideRight from '../../../animation/slideright';
import SlideDown from '../../../animation/slidedown';

const ContentSection = ({
  firstComponent = 'text',
  video = '/main_video.gif',
  title = 'Experience Fast Red Flag Reporting',
  description = 'Browse 1000\'s of unstructured documents in your Data Room to find underlying risk in real time.',
  listItems = [],
  buttonLabel = 'Tell me more',
  buttonOnClick = () => window.open('https://calendly.com/hadaly', '_blank'),
  target = 'For Due diligence Consultant',
  link = '',
  linkOnClick = () => window.open('https://calendly.com/hadaly', '_blank'),
  maintitle = ''
}) => {

  const textComponent = (

    <SlideLeft className=''>

      <h2 className="text-3xl sm:text-4xl text-indigo-950 md:text-left text-center">
        {title}
      </h2>
      <p className="text-slate-900 text-lg mt-4 md:text-left text-center">
        {description}
      </p>
      {listItems && (
        <ul className="py-4 text-lg font-bold mt-8">
          {listItems.map((item, index) => (
            <li key={index} className="customli">{item}</li>
          ))}
        </ul>
      )}
      <p className="text-indigo-400 text-md font-bold">
        {target}
      </p>
      <div className='justify-center flex md:justify-start'>
        {buttonLabel && (
          <Button
            onClick={buttonOnClick}
            className="mt-12 group flex items-center  gap-x-1 text-xl font-medium bg-indigo-950 text-white hover:bg-opacity-90 md:inline-flex px-4 py-4"
          >
            {buttonLabel}
            <span className="transition-transform duration-300 transform group-hover:scale-125 text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </span>
          </Button>
        )}

      </div>

      {link && (
          <Button
            onClick={linkOnClick}
            className="text-indigo-900 text-xl font-bold underline mt-4"
          >
            {link}
          </Button>

        )}

    </SlideLeft>
  );

  const videoComponent = (
    <SlideRight>
      <div className=' flex justify-evenly md:px-2 px-16'>
        <img src={video} alt="Your GIF" className="w-full h-auto shadow-xl rounded-b-lg rounded-tl-3xl" />
      </div>
    </SlideRight>
  );

  return (
    <SectionWrapper id="cta" className="justify-evenly overflow-x-hidden">
      <SlideDown>
        {maintitle && (
          <div className='text-center mb-12 '>
            <h1 className="text-3xl text-gray-800 sm:text-4xl ">
              {maintitle}
            </h1>
          </div>
        )}
      </SlideDown>
      <div className=" space-y-12 flex lg:flex-row  flex-col items-center mx-auto justify-evenly w-screen">
        <div className="flex  lg:w-1/2 max-w-xl px-8 ">
          {firstComponent === 'text' ? textComponent : videoComponent}
        </div>
        <div className="flex lg:w-1/2  max-w-xl  px-8">
          {firstComponent === 'text' ? videoComponent : textComponent}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContentSection;


