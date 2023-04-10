import BaseDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Fintunes — Audio streaming app for Jellyfin</title>
                <meta name="description" content="Fintunes is a streaming audio player for the Jellyfin media system. It features a gorgeous interface that allows you to play your favourite music with ease." />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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

