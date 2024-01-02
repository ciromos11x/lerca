// _app.js (o _app.tsx se usi TypeScript)
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Altri tag head possono andare qui */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
