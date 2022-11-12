import SC from '@emotion/styled';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {ServiceCard} from './card';
import {CustomSlider} from './customSlider';

const Container = SC.section`
  background-color: #edecec;
  overflow: hidden;
  padding: 0 0 50px 0;
  @media ${maxDevice.tablet} {
    padding: 0 0 30px 0;
  }
`;

const Content = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 30px 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 30px 30px 0 30px;
  }
`;

const H3 = SC.h3`
  font-weight: 600;
  margin: 0 0 12px 0;
  font-size: 30px;
  line-height: 1.3;
  @media ${maxDevice.laptop} {
    font-size: 26px;
  }
  @media ${maxDevice.tablet} {
    font-size: 22px;
    margin: 0 0 8px 0;
  }
`;

const slideData = [
  {
    label: 'Подбор IT персонала',
    desc: 'Закрытие единичных позиций, а также подбор команды для стартапа или отдела',
    steps: [],
    benefits: [
      'Комфортный сервис и максимальное погружение в проект',
      'Индивидуальный подход',
      'Персональный менеджер для каждого клиента',
      'Скорость - закрытие позиции от 1 до 8 недель',
      'Полная конфиденциальность проекта',
      'Гарантия замены в период испытательного срока, если кандидат по каким-либо причинам не подошёл',
      'Помощь в адаптации кандидатов на новом рабочем месте',
    ],
  },
  {
    label: 'Аутсорсинг разработчиков и проектных команд',
    desc: 'Интеграция в команду клиента',
    steps: [],
    benefits: [
      'Формируем команду под конкретный проект',
      'Члены команды работают только над её решением, не отвлекаясь на другие проекты',
    ],
  },
  {
    label: 'IT Executive Search',
    desc: 'Подбор руководителей высшего звена и редких IT-специалистов',
    steps: [],
    benefits: [],
  },
  {
    label: 'Карьерное консультирование',
    desc: 'Помогаем в достижении карьерных целей начинающим специалистам, опытным экспертам и тем, кто хочет сменить направление',
    steps: [],
    benefits: [],
  },
];

export const Services = props => (
  <Element name="services">
    <Container>
      <Content>
        <H3>Услуги</H3>
      </Content>
      <CustomSlider
        withControls={false}
        responsive={[
          {
            breakpoint: 2560,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {slideData.map((o, i) => (
          <ServiceCard index={i} key={i} {...o} />
        ))}
      </CustomSlider>
    </Container>
  </Element>
);
