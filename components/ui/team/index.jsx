import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import Link from 'next/link';
import ContentSection from '../ContentSection';
import "../../../i18n";
import { useTranslation } from 'react-i18next';

const reports = () => {
  const { t, i18n } = useTranslation('');
  return (
    <div className='mt-24'>
      <ContentSection
        firstComponent='text'
        video='/team.jpg'
        title={t('aboutTitle1')}
        description={t('aboutIntro')}
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
