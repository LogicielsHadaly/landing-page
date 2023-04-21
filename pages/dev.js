import Head from "next/head";
import INDICATORS from "../components/ui/DEV";
import DEV from "../components/ui/DEV";
import FAQs from "../components/ui/FAQs";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function index() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Pricing - Split</title>
      </Head>
      <Navbar />
      <DEV/>
      <Footer />
    </>
  );
}
