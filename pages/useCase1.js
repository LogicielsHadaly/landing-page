import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Usecase from "../components/ui/UseCaseReportAutomation"
import Carroussel from "../components/ui/Carroussel";
import Timeline from "../components/ui/Timeline"

export default function index() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Report Automation</title>
      </Head>
      <Navbar />
      <Usecase/>
      <Timeline/>
      <Carroussel />
      <Footer />
    </>
  );
}
