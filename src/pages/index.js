import Head from 'next/head';
import React from 'react';
import {Events, scrollSpy} from 'react-scroll';

import {Clients, Intro, Services, TechStacks, WorkWithUs} from '../components';

function Home(props) {
  React.useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', to);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <>
      <Head>
        <title>Madjoylab - подбор IT персонала, аутсорсинг, IT Executive Search и карьерное консультирование</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="max-image-preview:large" />
        <meta
          name="description"
          content="Madjoylab - подбор IT персонала, аутсорсинг, IT Executive Search и карьерное консультирование.Успешно подбираем лучший IT персонал любого уровня и специализации.Обширная база кандидатов, гарантии."
        />
        <meta
          name="keywords"
          content="Digital-агентство, Студия madjoylab, Дизайн сайта, Дизайн приложений, Разработка приложений, Разработка сайтов, SMM-услуги, Школа дизайна, Школа разработки, madjoylab design, madjoylab dev"
        />
        <meta property="og:title" content="Madjoylab - подбор IT персонала, аутсорсинг, IT Executive Search и карьерное консультирование" />
        <meta
          property="og:description"
          content="Madjoylab - подбор IT персонала, аутсорсинг, IT Executive Search и карьерное консультирование.Успешно подбираем лучший IT персонал любого уровня и специализации.Обширная база кандидатов, гарантии."
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={new Date().toISOString()} />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="http://madjoylab.ru/" />
        <meta property="og:site_name" content="madjoylab" />
        <meta property="og:image" content="/cover.png" key="og:image" />
        <meta property="twitter:image" content="/cover.png" key="twitter:image" />
        <meta property="twitter:title" content="Madjoylab - подбор IT персонала, аутсорсинг, IT Executive Search и карьерное консультирование" />
        <meta
          property="twitter:description"
          content="Madjoylab - подбор IT персонала, аутсорсинг, IT Executive Search и карьерное консультирование.Успешно подбираем лучший IT персонал любого уровня и специализации.Обширная база кандидатов, гарантии."
        />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content="http://madjoylab.ru/" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Intro />
      <Services />
      <TechStacks />
      <WorkWithUs />
      <Clients />
    </>
  );
}

export default Home;
