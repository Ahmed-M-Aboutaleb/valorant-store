import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Footer />
            <Toaster />
            <script
                data-name='BMC-Widget'
                data-cfasync='false'
                src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
                data-id='iifire'
                data-description='Support me on Buy me a coffee!'
                data-message='You liked the website?You can buy me a coffee 😎'
                data-color='#5F7FFF'
                data-position='Right'
                data-x_margin='18'
                data-y_margin='18'
            ></script>
        </>
    );
}

export default MyApp;
