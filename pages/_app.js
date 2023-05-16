import "../styles/globals.css";
import "../components/ui/Graph";
import Head from "next/head";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <title>Split</title>
          <meta
            name="description"
            content="The ultimate way to get more website traffic and grow your online business."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </LocalizationProvider>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
