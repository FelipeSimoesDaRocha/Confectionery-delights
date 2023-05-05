import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="application-name" content="Delicias da Confeitaria" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Admin" />
        <meta name="description" content="Delicias da confeitaria" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#8559FE" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#fff" />
        <meta name="robots" content="follow, index" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="canonical" href="https://confectionery-delights.vercel.app/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
