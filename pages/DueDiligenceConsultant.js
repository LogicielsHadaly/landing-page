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
        Video={"/Main_video_v1.gif"}
        BgColor={"bg-indigo-200"}
        title={[
          { text: 'The Burden of going through a Data Room end Now.', highlight: false },
        ]}
        description="Browse 1000's of unstructured documents in your Data Room to find underlying risk in real time. Accelerating repetitive process of your due diligence."
        button1Text="Book A Demo"
        button1OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        button2Text="Login"
        button2OnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
      />

      <ContentSection
        firstComponent="VideoContent"
        video="/main_video.gif"
        title="Connect to your Data Room"
        description="Start getting instant insight by connecting Data Room using our wide network of connectors including Google Drive, and Firmex. Our Engine is also available on a premise solution our using your local environment."
        listItems={[]}
        buttonLabel=""
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target=''
        link=""
        maintitle='Because Your value lies in the ability to quickly identify key issues        '
      />

      <ContentSection
        firstComponent="text"
        video="/main_video.gif"
        title="Generate your Risk Reports"
        description="Hadaly helps you understand your data room faster by letting you chat with any document and get answers within seconds."
        listItems={[]}
        buttonLabel=""
        buttonOnClick={() => window.open('https://calendly.com/hadaly', '_blank')}
        target=''
        link=""
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
      />

      <Carroussel />
      <Footer />
    </>
  );
}
