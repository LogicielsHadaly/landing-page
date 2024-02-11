import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Carroussel from "../components/ui/Carroussel";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";

export default function index() {
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
          { text: 'The Burden of going through a Data Room end Now.', highlight: false },
        ]}
        description="Browse 1000's of unstructured documents in your Data Room to identify underlying risks in real time, thereby accelerating the repetitive processes involved in your due diligence."
        button1Text="Book A Demo"
        button1OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        button2Text="Login"
        button2OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
      />

      <ContentSection
        firstComponent="VideoContent"
        video="/video/video_connect_your_dataroom.gif"
        title="Connect to your Data Room"
        description="Connect to your Data Room and start gaining instant insights. Utilize our extensive network of connectors, including Google Drive and Firmex, to establish the connection. Our engine is also available as an on-premise solution or can be integrated into your local environment."
        listItems={[]}
        buttonLabel=""
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target=''
        link=""
        maintitle='Your value lies in the ability to quickly identify key issues.'
      />

      <ContentSection
        firstComponent="text"
        video="/video/video_generate_risk_reports.gif"
        title="Generate Your Risk Reports"
        description="Hadaly enhances your understanding of your data room swiftly by enabling you to interact with any document through chat and receive answers within seconds."
        listItems={[]}
        buttonLabel=""
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target=''
        link=""
      />


      <ContentSection
        firstComponent="VideoContent"
        video="/video/video_enhance_deal_screening.gif"
        title="Enhance Your Deal Screening"
        description="Act quickly, as you're likely not the only firm interested in this deal. Hadaly boosts your efficiency by detecting early Red Flags, requesting missing documentation, and securing a competitive advantage over other firms."
        listItems={[]}
        buttonLabel="Join Now"
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target=''
        link=""
      />

      {/* <Carroussel /> */}
      <Footer />
    </>
  );
}
