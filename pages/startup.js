import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Carroussel from "../components/ui/Carroussel";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import GridComponent from "../components/ui/Comparison";

export default function index() {
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
          { text: 'Build Qualitative Data Room Fast and with Experience ', highlight: false },
        ]}
        description="Your Data Room mirrors your Company organization, We help identify potential risks for your company to stay well organized and always prepared for future fundraising and acquisitions."
        button1Text="Start Building"
        button1OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        button2Text="Get Verification Checklist"
        button2OnClick={() => window.open('https://aupipvte5zf.typeform.com/to/WuqvYFZG', '_blank')}
      />


<ContentSection
        firstComponent="VideoContent"
        video="/video/video_build_qualitative_dataroom.gif"
        title="Build Qualitative DataRoom"
        description="We know how hard it is to Build A Qualitative Data Room !. Because your Data Room mirror your Company organization, Investors will scan every details of your Data Room before funding your Sartup. We make sure that you documents stay well organized and always prepared for future fundraising and aqcuisitions."
        listItems={[]}
        buttonLabel="Improve your Data Room Now"
        buttonOnClick={() => window.open('https://aupipvte5zf.typeform.com/to/WuqvYFZG', '_blank')}
        target=''
        link="Download Your Personal Data Room Checklist here"
        maintitle='Because building your Startup is hard enough'
      />
    
    <GridComponent/>
      <Carroussel />
      <Footer />
    </>
  );
}
