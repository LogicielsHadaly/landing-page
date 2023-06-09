import '../styles/globals.css';
import Head from 'next/head';
import "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Hadaly</title>
        <meta
          name="description"
          content="Assess and clarify Institutional portfolios with actionable insights with Hadaly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hadalyIcon.ico" />
        <link
          href="/fonts/Fontspring-DEMO-argentcf-regular.otf"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href="/fonts/Cerebri-Sans-Regular.ttf"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <style>{`
          @font-face {
            font-family: 'CustomFont';
            src: url('/fonts/Fontspring-DEMO-argentcf-regular.otf') format('opentype');
          }

          @font-face {
            font-family: 'OtherFont';
            src: url('/fonts/Cerebri-Sans-Regular.ttf') format('truetype');
          }

          body {
            font-family: 'OtherFont', sans-serif;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'CustomFont', sans-serif;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

