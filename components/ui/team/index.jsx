import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import Link from 'next/link';
import ContentSection from '../ContentSection';



const reports = () => {
  return (
    <div className='mt-24'>
      <ContentSection
        firstComponent='text'
        video='/team.jpg'
        title='OUR VISION'
        description="HADALY is redefining due diligence in capital markets 
    through advanced AI technology. The platform integrates with existing data rooms,
     enhancing data organization and identifying gaps. Focused on empowering startups, SMEs, and due diligence advisors, HADALY offers tools for swift risk assessment
    and red flag identification. Its capability to process extensive, unstructured data ensures comprehensive
     risk analysis and improves the quality of DataRooms. The objective is to streamline the due diligence process,
      making it more efficient and insightful for all involved parties."
        listItems={[]}
        buttonLabel=''
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target='Aimé Toumelin Founder, CEO'
        link=''
        linkOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
      />

    </div>



  );
};

export default reports;
