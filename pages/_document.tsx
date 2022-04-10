import Document, {
    DocumentContext,
    Html,
    Main,
    Head,
    NextScript,
} from 'next/document';
export const config = { amp: true };

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <script
                        async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
                        crossOrigin='anonymous'
                    />
                </Head>
                <body data-what-you-are-looking-at='👀'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
