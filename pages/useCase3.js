import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Usecase from "../components/ui/UseCaseRiskMitigation"
import Carroussel from "../components/ui/Carroussel";

export default function index() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Risk Mitigation</title>
      </Head>
      <Navbar />
      <Usecase/>
      <Carroussel />
      <Footer />
    </>
  );
}
