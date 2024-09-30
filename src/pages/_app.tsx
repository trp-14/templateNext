import '../styles/global.css'; // Import global styles
import { AppProps } from 'next/app'; // Import the type for props

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
