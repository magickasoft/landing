import React from 'react';
import SC from '@emotion/styled';

import {maxDevice} from '../styles';
import Link from 'next/link';

const Container = SC.footer`
  z-index: 9999;
  background: #F2F4FA;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 38px 140px 38px 140px;
  @media ${maxDevice.tablet} {
    padding: 38px 30px 38px 30px;
  }
  @media ${maxDevice.mobileL} {
    padding: 38px 30px 38px 30px;
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Contacts = SC.div``;

const Links = SC.div`
  display: flex;
  flex-direction: row;
  @media ${maxDevice.mobileS} {
    flex-direction: column;
    align-self: flex-start;
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

const Text = SC.div`
  margin-bottom: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
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

const InfoBigContainer = SC.div`
  margin: 17px 0 25px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #777777;
`;

const InfoBigLabel = SC.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  color: #777777;
  margin-bottom: 20px;
`;

const InfoBig = ({label, children}) => (
  <InfoBigContainer>
    {label && <InfoBigLabel>{label}</InfoBigLabel>}
    {children}
  </InfoBigContainer>
);

export const Footer = () => (
  <Container>
    <Contacts>
      <Copyright>© {new Date().getFullYear()} IT Angels</Copyright>
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
    <Links>
      <InfoBig label="Информация">
        <Text>
          <Link id="link" href="/about" passHref>
            Об учреждении
          </Link>
        </Text>
        <Text>
          <Link id="link" href="/services" passHref>
            Услуги
          </Link>
        </Text>
        <Text>
          <Link id="link" href="/objects" passHref>
            Объекты
          </Link>
        </Text>
        <Text>
          <Link id="link" href="/bidding" passHref>
            Торги
          </Link>
        </Text>
        <Text>
          <Link id="link" href="/documents" passHref>
            Документы
          </Link>
        </Text>
        <Text>
          <Link id="link" href="/news" passHref>
            Новости
          </Link>
        </Text>
        <Text>
          <Link id="link" href="/contacts" passHref>
            Контакты
          </Link>
        </Text>
        <Text>
          <Link id="link" href="/about#corruption" passHref>
            Противодействие коррупции
          </Link>
        </Text>
        <Text>
          <Link id="link" href="/vacancies" passHref>
            Вакансии
          </Link>
        </Text>
      </InfoBig>
      <InfoBig label="Сайты">
        <Text>
          <Link id="link" target="_blank" href="http://www.rosim.ru/" passHref>
            Росимущество
          </Link>
        </Text>
        <Text>
          <Link
            id="link"
            target="_blank"
            href="http://zakupki.gov.ru/epz/order/quicksearch/search.html?strictEqual=true&searchString=%D0%A4%D0%95%D0%94%D0%95%D0%A0%D0%90%D0%9B%D0%AC%D0%9D%D0%9E%D0%95+%D0%93%D0%9E%D0%A1%D0%A3%D0%94%D0%90%D0%A0%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%9E%D0%95+%D0%A3%D0%9D%D0%98%D0%A2%D0%90%D0%A0%D0%9D%D0%9E%D0%95+%D0%9F%D0%A0%D0%95%D0%94%D0%9F%D0%A0%D0%98%D0%AF%D0%A2%D0%98%D0%95+%22%D0%90%D0%92%D0%A2%D0%9E%D0%A0%D0%95%D0%9C%D0%9E%D0%9D%D0%A2%D0%9D%D0%AB%D0%99+%D0%A6%D0%95%D0%9D%D0%A2%D0%A0+%D0%9C%D0%98%D0%9D%D0%93%D0%9E%D0%A1%D0%98%D0%9C%D0%A3%D0%A9%D0%95%D0%A1%D0%A2%D0%92%D0%90+%D0%A0%D0%9E%D0%A1%D0%A1%D0%98%D0%98%22"
            passHref
          >
            Реестр закупок
          </Link>
        </Text>
        <Text>
          <Link id="link" target="_blank" href="http://esugi.rosim.ru/" passHref>
            Реестр торгов
          </Link>
        </Text>
        <Text>
          <Link id="link" target="_blank" href="http://esugi.rosim.ru/" passHref>
            Реестр Федерального имущества
          </Link>
        </Text>
      </InfoBig>
    </Links>
  </Container>
);
