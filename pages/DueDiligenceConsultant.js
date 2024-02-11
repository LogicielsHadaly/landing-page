import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Carroussel from "../components/ui/Carroussel";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import "../i18n";
import { useTranslation } from 'react-i18next';

export default function index() {
  const { t, i18n } = useTranslation('');
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>For Due Diligence Consultant</title>
      </Head>
      <Navbar />
      <Hero
        Video={"/video/hero_video_consultant.gif"}
        BgColor={"bg-indigo-300"}
        title={[
          { text: t('ddConsultantHeroTitle'), highlight: false },
        ]}
        description={t('ddConsultantHeroDescription')}
        button1Text={t('ddConsultantHeroButton1')}
        button1OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        button2Text={t('ddConsultantHeroButton2')}
        button2OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
      />

      <ContentSection
        firstComponent="VideoContent"
        video="/video/video_connect_your_dataroom.png"
        title={t('ddConsultantsection1Title')}
        description={t('ddConsultantsection1Subtitle')}
        listItems={[]}
        buttonLabel=""
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target=''
        link=""
        maintitle={t('ddConsultantMainTitleSection1')}
      />

      <ContentSection
        firstComponent="text"
        video="/video/video_generate_risk_reports.gif"
        title={t('ddConsultantsection2Title')}
        description={t('ddConsultantsection2Subtitle')}
        listItems={[]}
        buttonLabel=""
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target=''
        link=""
      />


      <ContentSection
        firstComponent="VideoContent"
        video="/video/video_enhance_deal_screaning.gif"
        title={t('ddConsultantsection3Title')}
        description={t('ddConsultantsection3Subtitle')}
        listItems={[]}
        buttonLabel={t('ddConsultantbutton1Section3')}
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target=''
        link=""
      />

      {/* <Carroussel /> */}
      <Footer />
    </>
  );
}
