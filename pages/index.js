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
import DataIngestion from "../components/ui/DataIngestion";
import InsightGen from "../components/ui/InsightGen";
import DataGov from "../components/ui/DataGovernance"
import Graphmap from "../components/ui/Graphmap";
import Carroussel from "../components/ui/Carroussel";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Navbar />
      <Hero />
      <DecisionMaking/>
      <DataIngestion />
      {/* <Graphmap /> */}
      <InsightGen />
      <DataGov />
      <LogoGrid />
      <Carroussel />
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