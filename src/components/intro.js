import SC from '@emotion/styled';
import React from 'react';
import {Element} from 'react-scroll';

import {maxDevice} from '../styles';
import {CompaniesList} from './companiesList';

const Container = SC.div`
  padding: 23vh 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 18vh 30px 0 30px;
  }
`;

const Brand = SC.h3`
  margin: 0 0 12px 0;
  font-size: 56px;
  line-height: 1.3;
  width: 80%;
  @media ${maxDevice.laptop} {
    font-size: 43px;
  }
  @media ${maxDevice.tablet} {
    width: 100%;
    font-size: 22px;
    margin: 0 0 8px 0;
  }
`;

export const Intro = props => (
  <Element name="intro">
    <section>
      <Container>
        <Brand>Создаём IT команды для технологических проектов</Brand>
      </Container>
      <CompaniesList />
    </section>
  </Element>
);
