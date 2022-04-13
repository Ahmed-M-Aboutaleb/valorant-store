import Head from 'next/head';
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
            <Head>
                <title>Valorant Store</title>
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
                />
                <meta name='application-name' content='Valorant Store' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta
                    name='apple-mobile-web-app-status-bar-style'
                    content='default'
                />
                <meta
                    name='apple-mobile-web-app-title'
                    content='Valorant Store'
                />
                <meta
                    name='description'
                    content="From now you don't need to open Valorant to see the store just check it from here 😎"
                />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta
                    name='msapplication-config'
                    content='/icons/browserconfig.xml'
                />
                <meta name='msapplication-TileColor' content='#dae0e7' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta
                    name='msapplication-TileImage'
                    content='/icons/ms-icon-144x144.png'
                />
                <meta name='theme-color' content='#dae0e7' />

                <link
                    rel='apple-touch-icon'
                    sizes='57x57'
                    href='/icons/apple-icon-57x57.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='60x60'
                    href='/icons/apple-icon-60x60.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='72x72'
                    href='/icons/apple-icon-72x72.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='76x76'
                    href='/icons/apple-icon-76x76.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='114x114'
                    href='/icons/apple-icon-114x114.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='120x120'
                    href='/icons/apple-icon-120x120.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='144x144'
                    href='/icons/apple-icon-144x144.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='152x152'
                    href='/icons/apple-icon-152x152.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/icons/apple-icon-180x180.png'
                />
                <link rel='manifest' href='/manifest.json' />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='192x192'
                    href='/icons/android-icon-192x192.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/icons/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='96x96'
                    href='/icons/favicon-96x96.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/icons/favicon-16x16.png'
                />
                <link rel='shortcut icon' href='/favicon.ico' />

                <meta name='twitter:card' content='summary' />
                <meta name='twitter:url' content='https://valorant-store.xyz' />
                <meta name='twitter:title' content='Valorant Store' />
                <meta
                    name='twitter:description'
                    content="From now you don't need to open Valorant to see the store just check it from here 😎"
                />
                <meta
                    name='twitter:image'
                    content='https://valorant-store.xyz/icons/192x192.png'
                />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='Valorant Store' />
                <meta
                    property='og:description'
                    content="From now you don't need to open Valorant to see the store just check it from here 😎"
                />
                <meta property='og:site_name' content='Valorant Store' />
                <meta property='og:url' content='https://valorant-store.xyz' />
                <meta
                    property='og:image'
                    content='https://valorant-store.xyz/icons/apple-icon-152x152.png'
                />
            </Head>
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
