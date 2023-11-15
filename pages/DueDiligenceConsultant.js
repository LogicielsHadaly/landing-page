import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Carroussel from "../components/ui/Carroussel";
import Hero from "../components/ui/Hero";

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

      <Carroussel />
      <Footer />
    </>
  );
}
