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
          { text: 'Build a Qualitative Data Room Quickly and with Expertise', highlight: false },
        ]}
        description="Since your Data Room reflects your company's organization, we help identify potential risks, enabling your company to remain well-organized and always prepared for future fundraising and acquisitions."
        button1Text="Start Building"
        button1OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        button2Text="Get Verification Checklist"
        button2OnClick={() => window.open('https://aupipvte5zf.typeform.com/to/WuqvYFZG', '_blank')}
      />


<ContentSection
        firstComponent="VideoContent"
        video="/video/video_build_qualitative_dataroom.gif"
        title="Build a Qualitative Data Room"
        description="We understand the challenge of building a qualitative Data Room. Since your Data Room reflects your company's organization, investors will scrutinize every detail before funding your startup. We ensure that your documents are well-organized and always ready for future fundraising and acquisitions."
        listItems={[]}
        buttonLabel="Improve Your Data Room Now"
        buttonOnClick={() => window.open('https://aupipvte5zf.typeform.com/to/WuqvYFZG', '_blank')}
        target=''
        link="Download Your Personal Data Room Checklist Here"
        maintitle='Because Building Company is Hard Enough'
      />
    
    <GridComponent/>
      <Carroussel />
      <Footer />
    </>
  );
}
