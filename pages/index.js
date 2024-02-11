import Head from "next/head";
import CenteredCTAText from "../components/ui/CenteredCTAText";
import CTA from "../components/ui/CTA";
import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Stats from "../components/ui/Stats";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import DecisionMaking from "../components/ui/DecisionMaking";
import ContentSection from "../components/ui/ContentSection";
import InsightGen from "../components/ui/InsightGen";
import DataGov from "../components/ui/DataGovernance"
import Graphmap from "../components/ui/Graphmap";
import Carroussel from "../components/ui/Carroussel";
import Testimonial from '../components/ui/Testimonials';
import "../i18n";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation('');

  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>

      <Navbar />
      <Hero
        Video={"/video/hero_video.gif"}
        BgColor="bg-indigo-50"
        title={[
          { text: t('heroTitle1') , highlight: false },
          { text: t('heroTitle2'), highlight: true },
        ]}
        description={t('heroDescription')}
        button1Text={t('heroButton1')}
        button1OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        button2Text={t('heroButton2')}
        button2OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
      />

      {/* <DecisionMaking /> */}

      <ContentSection
        firstComponent='text'
        video='/video/video_website_v2.gif'
        title={t('section1Title')}
        description={t('section1Subtitle')}
        listItems={[
          t('section1List1'),
          t('section1List2'),
          t('section1List3')
        ]}
        buttonLabel={t('button1Section1')}
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        internalLink = '\DueDiligenceConsultant'
        target={t('target1Section1')}

        link=''
        linkOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
         />

      <ContentSection
        firstComponent="VideoComponent"
        video="/video/video_connect_your_dataroom.png"
        title={t('section2Title')}
        description={t('section2Subtitle')}
        listItems={[
          t('section2List1'),
          t('section2List2'),
          t('section2List3')
        ]}
        buttonLabel={t('button1Section2')}
        internalLink = '\startup'
        buttonOnClick= {() => window.open('https://calendly.com/hadaly', '_blank')}
        target={t('target1Section2')}
        link={t('section2Link')}
        linkOnClick={() => window.open('https://aupipvte5zf.typeform.com/to/WuqvYFZG', '_blank')}
      />



<ContentSection
        firstComponent='text'
        video='/video/video_generate_risk_reports.gif'
        title={t('section3Title')}
        description={t('section3Subtitle')}
        listItems={[
          t('section3List1'),
          t('section3List2'),
          t('section3List3')
        ]}
        buttonLabel={t('button1Section3')}
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        internalLink = '\DueDiligenceConsultant'
        target={t('target1Section3')}

        link=''
        linkOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
         />

      <ContentSection
        firstComponent="VideoComponent"
        video="/video/video_enhance_deal_screaning.gif"
        title={t('section4Title')}
        description={t('section4Subtitle')}
        listItems={[
          t('section4List1'),
          t('section4List2'),
          t('section4List3')
        ]}
        buttonLabel={t('button1Section4')}
        internalLink = '\startup'
        buttonOnClick= {() => window.open('https://calendly.com/hadaly', '_blank')}
        target={t('target1Section4')}
        link={t('section4Link')}
        linkOnClick={() => window.open('https://aupipvte5zf.typeform.com/to/WuqvYFZG', '_blank')}
      />



      {/* <InsightGen /> */}
      {/* <DataGov /> */}
      <LogoGrid />
      {/* <Testimonial /> */}
      {/* <Carroussel /> */}
      {/* <CenteredCTAText />
      <CTA /> */}
      {/* <Features /> */}
      {/* <Stats /> */}
      {/* <FAQs /> */}
      {/* <FooterCTA /> */}
      <Footer />
    </>
  );
}

