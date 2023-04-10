import BaseDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Fintunes — Audio streaming app for Jellyfin</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => (
                sheet.collectStyles(<App {...props} />)
            ),
        });

        const initialProps = await BaseDocument.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [initialProps.styles, sheet.getStyleElement()],
        };
    } finally {
        sheet.seal();
    }
}

