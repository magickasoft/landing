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
        <title>madjoylab | Создаём IT команды для технологических проектов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="max-image-preview:large" />
        <meta
          name="description"
          content="Разрабатываем корпоративный софт для автоматизации бизнеса и производства. Создаем удобные мобильные приложения и web-сервисы."
        />
        <meta
          name="keywords"
          content="Digital-агентство, Студия madjoylab, Дизайн сайта, Дизайн приложений, Разработка приложений, Разработка сайтов, SMM-услуги, Школа дизайна, Школа разработки, madjoylab design, madjoylab dev"
        />
        <meta property="og:title" content="madjoylab | Создаём IT команды для технологических проектов" />
        <meta
          property="og:description"
          content="Разрабатываем корпоративный софт для автоматизации бизнеса и производства. Создаем удобные мобильные приложения и web-сервисы."
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={new Date().toISOString()} />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="http://madjoylab.ru/" />
        <meta property="og:site_name" content="madjoylab" />
        <meta property="og:image" content="/static/images/cover.jpeg" key="og:image" />
        <meta property="twitter:image" content="/static/images/cover.jpeg" key="twitter:image" />
        <meta property="twitter:title" content="madjoylab | Создаём IT команды для технологических проектов" />
        <meta
          property="twitter:description"
          content="Разрабатываем корпоративный софт для автоматизации бизнеса и производства. Создаем удобные мобильные приложения и web-сервисы."
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
