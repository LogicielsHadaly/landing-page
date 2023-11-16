import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import Link from 'next/link';
import ContentSection from '../ContentSection';



const reports = () => {
  return (
    <ContentSection
    firstComponent='text'
    video='/video_startup.gif'
    title='A Team of Expert'
    description="Our company is a dynamic blend of financial and technological expertise, dedicated to streamlining the portfolio management process through innovation. We've fostered strategic partnerships with top Canadian universities to ensure our solutions leverage the latest research and development advancements. This commitment to growth, innovation, and our team allows us to consistently refine our offerings. "
    listItems={[
      'Connect to your Data Room',
      'Generate your Risk Reports',
      'Chat with your Data Room to get additional informations'
    ]}
    buttonLabel='Tell me more'
    buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
    target='For Due diligence Consultant'
    link=''
    linkOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
     />
            


  );
};

export default reports;
 