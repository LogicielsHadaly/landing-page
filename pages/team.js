import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Team from "../components/ui/team"
import Carroussel from "../components/ui/Carroussel";

export default function index() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Team</title>
      </Head>
      <Navbar />
      <Team/>
      <Carroussel />
      <Footer />
    </>
  );
}
