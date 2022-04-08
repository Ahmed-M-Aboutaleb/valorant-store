import Footer from '../components/footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
