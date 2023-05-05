// Next
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Styles
import '../styles/globals.css';
import '../assets/fonts/font.css';
import Loading from 'components/Loading';

function App({ Component, pageProps }: AppProps) {
  const siteTitle = 'Delicias da Confeitaria';

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Loading />
      <Component {...pageProps} />;
    </>
  );
}

export default App;
