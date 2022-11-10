import SC from '@emotion/styled';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {ClientCard} from './clientCard';
import {CustomSlider} from './customSlider';

const Container = SC.section`
  background-color: #edecec;
  overflow: hidden;
  padding: 0 0 140px 0;
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
    desc: 'Крутая команда профессионалов, быстро адаптирующаяся под периодически изменяемые требования заказчика, качественно и в срок выполняющая поставленные задачи',
    src: '/static/clients/Kovtun_Anastasia.jpeg',
    executive: 'Ковтун Анастасия',
    position: 'Руководитель проектов S7 Airlines',
  },
  {
    desc: 'IT enjoy оперативно предоставил мобильных и бэкенд разработчиков, что позволило усилить команду и точечно ускорить развитие проектов',
    src: '/static/clients/Oleg_Borisov.jpeg',
    executive: 'Олег Борисов',
    position: 'Руководитель проектов группы компаний "ПИК"',
  },
];

export const Services = props => (
  <Element name="services">
    <Container>
      <Content>
        <H3>Услуги</H3>
      </Content>
      <CustomSlider>
        {slideData.map((o, i) => (
          <ClientCard key={i} {...o} />
        ))}
      </CustomSlider>
    </Container>
  </Element>
);
