import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Link from "next/link";
import Team from "../components/ui/team"
import Carroussel from "../components/ui/Carroussel";
import "../i18n";
import { useTranslation } from 'react-i18next';


export default function index() {
  const { t, i18n } = useTranslation('');
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>User Policy</title>
      </Head>
      <Navbar />


      <div className="mt-24 px-10 py-10  ">
        <p className=" py-10 text-3xl text-center">{t('termsOfUseTitle')} </p>
        <p className="pt-5">{t('termsOfUseintro')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse1Title')} </h2>
        <p className="pt-5">{t('termsOfUse1Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse2Title')} </h2>
        <p className="pt-5">{t('termsOfUse2Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse3Title')} </h2>
        <p className="pt-5">{t('termsOfUse3Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse4Title')} </h2>
        <p className="pt-5">{t('termsOfUse4Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse5Title')} </h2>
        <p className="pt-5">{t('termsOfUse5Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse6Title')} </h2>
        <p className="pt-5">{t('termsOfUse6Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse7Title')} </h2>
        <p className="pt-5">{t('termsOfUse7Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse8Title')} </h2>
        <p className="pt-5">{t('termsOfUse8Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse81Title')} </h2>
        <p className="pt-5">{t('termsOfUse81Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse82Title')} </h2>
        <p className="pt-5">{t('termsOfUse82Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse83Title')} </h2>
        <p className="pt-5">{t('termsOfUse83Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse84Title')} </h2>
        <p className="pt-5">{t('termsOfUse84Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse9Title')} </h2>
        <p className="pt-5">{t('termsOfUse9Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse10Title')} </h2>
        <p className="pt-5">{t('termsOfUse10Content')} </p>

        <h2 className=" pt-10 text-xl">{t('termsOfUse11Title')} </h2>
        <p className="pt-5">{t('termsOfUse11Content')} </p>



      </div>






      <Footer />
    </>
  );
}
