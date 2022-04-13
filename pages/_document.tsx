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
                <Head />
                <body data-what-are-you-looking-at='👀'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
