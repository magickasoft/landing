import SC from '@emotion/styled';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';

const Container = SC.section`
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

const Brand = SC.h3`
  font-weight: 400;
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

export const Clients = props => (
  <Element name="clients">
    <Container>
      <Content>
        <Brand>Клиенты о нас</Brand>
      </Content>
    </Container>
  </Element>
);
