import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>Hadaly</title>
        <meta
          name='description'
          content='Boost user engagement by providing detailed analysis & AI modules to your finance customers.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
