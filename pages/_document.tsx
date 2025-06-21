import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="A collection of nature photography taken by C. Langlois."
          />
          <meta property="og:site_name" content="d1ub1sgvr3a6jw.cloudfront.net/" />
          <meta
            property="og:description"
            content="A collection of nature photography taken by C. Langlois."
          />
          <meta property="og:title" content="Nature Photography" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
