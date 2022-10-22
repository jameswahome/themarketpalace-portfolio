import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/NavBar/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="BWsf0grjPReFeTJI--599xSN171BuXb7C6RiYzZ2zqw"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
