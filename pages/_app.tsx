import Script from 'next/script';
import { useReducer } from 'react';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer';
import { UserContext, userReducer } from '../context/context';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    const initState = {
        id: null,
        accessToken: null,
        entitlementToken: null,
        region: 'kr',
    };
    const [state, dispatch] = useReducer(userReducer, initState);
    return (
        <>
            <UserContext.Provider value={state}>
                <Component dispatch={dispatch} {...pageProps} />
                <Footer />
                <Toaster />
                <Script
                    strategy='beforeInteractive'
                    onError={(e) => {
                        console.error('Script failed to load', e);
                    }}
                    data-name='BMC-Widget'
                    async
                    data-cfasync='false'
                    src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
                    data-id='iifire'
                    data-description='Support me on Buy me a coffee!'
                    data-message='You liked the website?You can buy me a coffee 😎'
                    data-color='#5F7FFF'
                    data-position='Right'
                    data-x_margin='18'
                    data-y_margin='18'
                ></Script>
            </UserContext.Provider>
        </>
    );
}

export default MyApp;
