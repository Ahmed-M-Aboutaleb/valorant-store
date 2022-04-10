import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Footer />
            <Toaster />
        </>
    );
}

export default MyApp;
