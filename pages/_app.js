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
          content="Your Due Diligence Copilot to Rapidly Assess Deal Red Flags and Build Qualitative Data Room"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/head_icon.png" />
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

        {/* Your custom script */}
        <script 
          dangerouslySetInnerHTML={{ 
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "jph051lmfg");
            ` 
          }} 
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
