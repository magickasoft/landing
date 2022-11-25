import {CacheProvider} from '@emotion/react';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import {Analytics} from '@vercel/analytics/react';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import Script from 'next/script';
import React from 'react';

import {Footer, Header} from '../components';
import {createEmotionCache} from '../helpers/createEmotionCache';
import {GA_MEASUREMENT_ID, pageview} from '../helpers/gtag';
import {withYM, YA_METRIKA_ID} from '../helpers/ym';
import {GlobalStyle} from '../styles';
import theme from '../styles/theme';

const clientSideEmotionCache = createEmotionCache();

const App = ({Component, emotionCache = clientSideEmotionCache, pageProps}) => {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = url => pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <GlobalStyle />
      <Head>
        <title>Madjoylab - создаём IT команды для технологических проектов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="yandex-verification" content="bed3ff7aa8f6b9a4" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default withYM(YA_METRIKA_ID, Router)(App);
