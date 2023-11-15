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

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      {/* <div className="flex-1 pl-8">
        <img src="/main_video.gif" alt="Your GIF" className=" w-full h-auto shadow-xl rounded-b-lg rounded-tl-3xl" />
      </div> */}
      <Navbar />
      <Hero
        Video={"/Main_video_v1.gif"}
        BgColor="bg-indigo-50"
        title={[
          { text: 'Your Due Diligence Copilot to Rapidly Assess ', highlight: false },
          { text: 'Deal Red Flag', highlight: true },
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
        video='/main_video.gif'
        title='Experience Fast Red Flag Reporting'
        description="Browse 1000\'s of unstructured documents in your Data Room to find underlying risk in real time."
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

      <ContentSection
        firstComponent="VideoComponent"
        video="/video_startup.gif"
        title="Build Qualitative Data Room"
        description="Because your Data Room mirror your Company organization, We make sure to identify potential risks in your Data Room for your company to stay well Organized and always prepared for future fundraising and aqcuisitions."
        listItems={[
          "Upload or start building your Data Room",
          "Detect Upfront Missing Documents",
          "Improve your Data Room Quality Scoring"
        ]}
        buttonLabel="Tell me more"
        buttonOnClick= {() => window.open('https://calendly.com/hadaly', '_blank')}
        target='For Startup & SME'
        link="Download Your Personal Data Room Check List"
        linkOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
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