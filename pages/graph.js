import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Graph from "../components/ui/Graph";

export default function index() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
        <title>Graph - Hadaly</title>
      </Head>
      <Navbar />
      <Graph />
      <Footer />
    </>
  );
}
