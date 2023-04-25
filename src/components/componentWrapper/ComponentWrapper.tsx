import { CustomAppProps } from 'pages/_app';

const ComponentWrapper = ({ Component, pageProps }: CustomAppProps) => {



  return <Component {...pageProps} />;
};

export default ComponentWrapper;
