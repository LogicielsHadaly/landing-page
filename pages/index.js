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
import { useEffect } from 'react';
export default function Home() {


  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '656bd1bd5061e600072a1d40' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);

    return () => {
      // Cleanup: remove the script if it's still in the DOM
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
          { text: 'Your Due Diligence Copilot to Rapidly Assess ', highlight: false },
          { text: 'Deal Red Flags', highlight: true },
        ]}
        description="Our data room AI connects with your existing data room provider. It transforms the folder structure and filenames to align with your internal standards, including highlighting any missing data. We also provide a generative AI chatbot for buy-side Q&A of the data room."
        button1Text="Get In Touch"
        button1OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        button2Text="Subscribe"
        button2OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
      />

      <DecisionMaking />



      <ContentSection
        firstComponent='text'
        video='/video/video_experience_fast_red_flag.gif'
        title='Experience Fast Red Flag Reporting'
        description="Browse 1000's of unstructured documents in your Data Room to find underlying risks in real time."
        listItems={[
          'Connect to your Data Room',
          'Generate your Risk Reports',
          'Chat with your Data Room to get additional information'
        ]}
        buttonLabel='Tell me more'
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        internalLink='\DueDiligenceConsultant'
        target='For Due Diligence Consultants'

        link=''
        linkOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
      />

      <ContentSection
        firstComponent="VideoComponent"
        video="/video/video_build_qualitative_dataroom.gif"
        title="Build Qualitative Data Room"
        description="Since your Data Room mirrors your company's organization, we ensure the identification of potential risks in your Data Room, helping your company stay well-organized and always prepared for future fundraising and acquisitions."
        listItems={[
          "Upload or start building your Data Room",
          "Detect missing documents upfront",
          "Improve your Data Room's Quality Scoring"
        ]}
        buttonLabel="Tell me more"
        internalLink='\startup'
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target='For Startups & SMEs'
        link="Download Your Personal Data Room Checklist"
        linkOnClick={() => window.open('https://aupipvte5zf.typeform.com/to/WuqvYFZG', '_blank')}
      />
      {/* <InsightGen /> */}
      {/* <DataGov /> */}
      <LogoGrid />
      <Testimonial />
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