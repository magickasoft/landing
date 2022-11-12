import SC from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';

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

const List = SC.div`
  align-items: center;
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

const Label = SC.div`
  font-size: 16px;
  line-height: 26px;
`;

const list = [
  'Индивидуальный подход и максимальное погружение в проект',
  'Поддержка и консультирование 24/7',
  'Высокая скорость закрытия позиций',
  'Гарантия замены в период испытательного срока',
  'Помощь в адаптации кандидатов на новом рабочем месте',
  'Снижение затрат на IT-персонал',
];

export const Benefits = props => (
  <Element name="benefits">
    <Container>
      <Content>
        <H3>Преимущества работы с нами</H3>
        {list.map((o,i) => (
          <List key={i}>
            <Image width="24" height="24" src="/static/services-check.svg" alt="check" />
            <Label>{o}</Label>
          </List>
        ))}
      </Content>
    </Container>
  </Element>
);
