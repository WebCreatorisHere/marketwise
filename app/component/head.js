import Head from 'next/head';

export default function OptimizedHead() {
  return (
    <Head>
      {/* Preload Google Fonts and apply onLoad to prevent render-blocking */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        as="style"
        type="text/css"
        crossorigin="anonymous"
      />
      <meta name="google-site-verification" content="IJZRK9vE98r2pXikqlCaHSzRewt4cdj1gytbpadM70A" />
      <link rel="preconnect" href="https://www.marketwise.io/"/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        media="print"
        onLoad={(e) => (e.target.media = 'all')}
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </noscript>

      {/* Lazy Load FontAwesome using media="print" and onLoad to avoid render-blocking */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        media="print"
        onLoad={(e) => (e.target.media = 'all')}
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </noscript>

      {/* Favicon */}
      <link rel="icon" type="image/webp" href="/favicon.webp" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
}

