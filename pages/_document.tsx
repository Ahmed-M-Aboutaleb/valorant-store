import Document, {
    DocumentContext,
    Html,
    Main,
    Head,
    NextScript,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='en'>
                <Head />
                <body data-what-you-are-looking-at='👀'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
