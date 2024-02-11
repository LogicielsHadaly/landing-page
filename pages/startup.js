import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Carroussel from "../components/ui/Carroussel";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import GridComponent from "../components/ui/Comparison";
import "../i18n";
import { useTranslation } from 'react-i18next';

export default function index() {
  const { t, i18n } = useTranslation('');
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>For Startup</title>
      </Head>
      <Navbar />
      <Hero
      Video={"/video/hero_video_startup.gif"}
        BgColor="bg-neutral-200"
        title={[
          { text: t('startupHeroTitle'), highlight: false },
        ]}
        description={t('startupHeroDescription')}
        button1Text={t('startupHeroButton1')}
        button1OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        button2Text={t('startupHeroButton2')}
        button2OnClick={() => window.open('https://aupipvte5zf.typeform.com/to/WuqvYFZG', '_blank')}
      />


<ContentSection
        firstComponent="VideoContent"
        video="/video/video_build_qualitative_dataroom.gif"
        title={t('startupsection1Title')}
        description={t('startupsection1Subtitle')}
        listItems={[]}
        buttonLabel={t('startupbutton1Section1')}
        buttonOnClick={() => window.open('https://aupipvte5zf.typeform.com/to/WuqvYFZG', '_blank')}
        target=''
        link={t('startuptarget1Section1')}
        maintitle={t('startupsection1MainTitle')}
      />
    
    <GridComponent/>
      {/* <Carroussel /> */}
      <Footer />
    </>
  );
}
