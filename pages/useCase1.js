import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ReportAuto from "../components/ui/ReportAutomation";
import Link from "next/link";


export default function index() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Pricing - Split</title>
      </Head>
      <Navbar />
      <ReportAuto/>
      <Footer />
    </>
  );
}
