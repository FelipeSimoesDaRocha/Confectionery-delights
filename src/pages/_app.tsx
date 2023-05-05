// Next
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Styles
import '../styles/globals.css';

import '../../public/font/font.css';

import { Loading } from 'components/loading';

function App({ Component, pageProps }: AppProps) {
  const siteTitle = 'Delicias da Confeitaria';
  const siteDescription = 'Delicias da Confeitaria';

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="robots" content="follow,index" />

        <link rel="canonical" href="" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />

        <meta name="application-name" content={siteTitle} />
        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-TileColor" content="#8559FE" />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Admin" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <link rel="preload" as="image" href="../assets/images/hero-slider-1.jpg" />
        <link rel="preload" as="image" href="../assets/images/hero-slider-2.jpg" />
        <link rel="preload" as="image" href="../assets/images/hero-slider-3.jpg" />

        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

        <meta name="title" content="Delicias da confeitaria" />
        <meta name="description" content="Delicias da confeitaria" />

        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <Loading />
      <Component {...pageProps} />;
    </>
  );
}

export default App;
