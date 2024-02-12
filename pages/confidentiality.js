import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Team from "../components/ui/team"
import Carroussel from "../components/ui/Carroussel";
import "../i18n";
import { useTranslation } from 'react-i18next';


export default function Index() {
  const { t, i18n } = useTranslation('');
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>User Policy</title>
      </Head>
      <Navbar />


      <div className="mt-24 px-10 py-10  ">
        <h1 className=" py-10 text-3xl text-center">{t('politicsTitle')} </h1>

        <h2 className=" pt-10 text-xl">{t('politicsTitle1')} </h2>
        <p className="pt-5">{t('politicsContent1')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle2')} </h2>
        <p className="pt-5">{t('politicsContent2')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle3')} </h2>
        <p className="pt-5">{t('politicsContent3')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle4')} </h2>
        <p className="pt-5">{t('politicsContent4')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle5')} </h2>
        <p className="pt-5">{t('politicsContent5')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle6')} </h2>
        <p className="pt-5">{t('politicsContent6')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle7')} </h2>
        <p className="pt-5">{t('politicsContent7')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle8')} </h2>
        <p className="pt-5">{t('politicsContent8')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle9')} </h2>
        <p className="pt-5">{t('politicsContent9')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle10')} </h2>
        <p className="pt-5">{t('politicsContent10')} </p>

        <h2 className=" pt-10 text-xl">{t('politicsTitle11')} </h2>
        <p className="pt-5">{t('politicsContent11')} </p>



      </div>






      <Footer />
    </>
  );
}
