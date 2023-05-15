import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Project1 from "../components/ui/Project1";

export default function index() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
        <title>Graph - Hadaly</title>
      </Head>
      <Navbar />
      <Project1 />
      <Footer />
    </>
  );
}
