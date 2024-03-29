import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Usecase from "../components/ui/UseCaseNetworkOptimization"
import Carroussel from "../components/ui/Carroussel";

export default function index() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Network Optimization</title>
      </Head>
      <Navbar />
      
      <Usecase />
      <Carroussel />
      <Footer />
    </>
  );
}
