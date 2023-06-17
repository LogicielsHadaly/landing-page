import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hadaly</title>
        <meta
          name="description"
          content="Boost user engagement by providing detailed analysis & AI modules to your finance customers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
