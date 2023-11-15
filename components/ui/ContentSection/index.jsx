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
  maintitle=''
}) => {

  const textComponent = (

    <SlideLeft>
      <div className="flex-none mt-12 space-y-3 md:mt-0 p-4">
        <h2 className="text-3xl sm:text-4xl text-indigo-950">
          {title}
        </h2>
        <p className="text-slate-900 text-lg">
          {description}
        </p>
        {listItems && (
          <ul className="pl-0 py-4 text-lg font-bold">
            {listItems.map((item, index) => (
              <li key={index} className="customli">{item}</li>
            ))}
          </ul>
        )}
        <p className="text-indigo-400 text-md font-bold">
          {target}
        </p>

        {buttonLabel && (
          <Button
            onClick={buttonOnClick}
            className="mt-12 group flex items-center justify-center gap-x-1 text-xl font-medium bg-indigo-950 text-white hover:bg-opacity-90 md:inline-flex px-4 py-4"
          >
            {buttonLabel}
            <span className="transition-transform duration-300 transform group-hover:scale-125 text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </span>
          </Button>
        )}
        {link && (
          <Button
            onClick={linkOnClick}
            className="text-indigo-900 text-xl font-bold underline"
          >
            {link}
          </Button>

        )}
      </div>
    </SlideLeft>
  );

  const videoComponent = (
    <SlideRight>
      <div className="px-8 justify-center mx-auto md:max-w-4xl">
        <img src={video} alt="Your GIF" className="w-full h-auto shadow-xl rounded-b-lg rounded-tl-3xl" />
      </div>
    </SlideRight>
  );

  return (
    <SectionWrapper id="cta" className="max-w-screen-xl mx-auto">
       <SlideDown>
      {maintitle && (
      <div className='text-center mb-12'>
        <h1 className="text-3xl text-gray-800 sm:text-4xl">
          {maintitle}
        </h1>
      </div>
      )}
      </SlideDown>
      <div className="custom-screen flex flex-col-reverse lg:flex-row justify-between items-center mx-auto px-4 md:px-8">
        <div className="flex-1">
          {firstComponent === 'text' ? textComponent : videoComponent}
        </div>
        <div className="flex-1">
          {firstComponent === 'text' ? videoComponent : textComponent}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContentSection;
