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
      Video={"/Main_video_startup.gif"}
        BgColor="bg-neutral-100"
        title={[
          { text: 'Build Qualitative Data Room Fast and with Experience ', highlight: false },
        ]}
        description="Your Data Room mirrors your Company organization, We help identify potential risks for your company to stay well organized and always prepared for future fundraising and acquisitions."
        button1Text="Start Building"
        button1OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        button2Text="Get Verification Checklist"
        button2OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
      />


<ContentSection
        firstComponent="VideoContent"
        video="/main_video.gif"
        title="Enhance your Deal Screening"
        description="Act Fast, because your are certainly not the only firm on this deal.  Hadaly improve your efficiency in detecting early Red Flag, ask for missing documentation and earn a competitive advantage on other firms."
        listItems={[]}
        buttonLabel="Join Now"
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target=''
        link=""
        maintitle='Because building your Startup is hard enough'
      />
    
    <GridComponent/>
      <Carroussel />
      <Footer />
    </>
  );
}
