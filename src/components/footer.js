import React from 'react';
import SC from '@emotion/styled';

import {maxDevice} from '../styles';
// import Link from 'next/link';

const Container = SC.footer`
  z-index: 9999;
  background: #fff;
  padding: 0 140px 0.75rem 140px;
  @media ${maxDevice.tablet} {
    padding: 0 30px 0.75rem 30px;
  }
  @media ${maxDevice.mobileL} {
    padding: 0 30px 0.75rem 30px;
  }
`;

const Contacts = SC.div`
  border-top: 1px solid #1f2326;
  padding-top: 3rem;
  @media ${maxDevice.tablet} {
    padding-top: 2.5rem;
  }
  @media ${maxDevice.mobileL} {
    padding-top: 2rem;
  }
`;

const Copyright = SC.div`
  margin: 17px 0 25px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #777777;
`;

const Content = SC.div`
  display: flex;
  align-items: flex-start;
  @media ${maxDevice.mobileL} {
    flex-direction: column;
  }
`;

const Block = SC.div`
  width: 180px;
`;

const InfoContainer = SC.div`
  margin: 15px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #777777;
`;

const InfoLabel = SC.div`
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #777777;
`;

const Info = ({label, children}) => (
  <InfoContainer>
    {label && <InfoLabel>{label}</InfoLabel>}
    {children}
  </InfoContainer>
);

export const Footer = () => (
  <Container>
    <Contacts>
      <Copyright>© IT Angels, {new Date().getFullYear()}</Copyright>
      <Content>
        <Block>
          <Info label="Телефоны">
            <div>+7 (495) 361-45-21</div>
            <div>+7 (495) 361-45-18</div>
          </Info>
          <Info label="Факс">
            <div>+7 (495) 361-45-21</div>
          </Info>
          <Info label="Электронная почта">
            <a href="mailto:info@dodrosim.ru">info@dodrosim.ru</a>
          </Info>
        </Block>
        <Block>
          <Info label="Адрес">
            <div>111024, Москва, проезд Завода Серп  и Молот, д. 5, стр.</div>
          </Info>
          <Info label="Режим работы">
            <div>Пн — Пт с 9:00 до 18:00</div>
          </Info>
        </Block>
      </Content>
    </Contacts>
  </Container>
);
