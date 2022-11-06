import SC from '@emotion/styled';
import React from 'react';

import {maxDevice, minDevice} from '../styles';
// import Link from 'next/link';

const Container = SC.footer`
  padding: 0 140px 0.75rem 140px;
  @media ${maxDevice.tablet} {
    padding: 0 30px 0.75rem 30px;
  }
`;

const Content = SC.div`
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
  padding: 1rem 0 0;
  color: #7f7f7f;
  font-size: 1rem;
  line-height: 1.375rem;
  @media ${minDevice.tablet} {
    padding: 0;
  }
`;

const Link = SC.a`
  transition: .25s ease;
  transition-property: background-position,border,color,left,margin,padding,right,opacity;
  color: #1f2326;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2.625rem;
  background-image: linear-gradient(-90deg,#181818 0%,#181818 49.99%,#f1477e 50%,#fa477e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 100%;
  background-size: 200%;
  &:hover {
    background-position: 0;
  }
  @media ${minDevice.mobileL} {
    font-size: 2rem;
  }
  @media ${minDevice.tablet} {
    font-size: 2.25rem;
    line-height: 2.9375rem;
  }
`;

const Contacts = SC.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 0 2.5rem;
  @media ${minDevice.laptopL} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Email = SC.div`
  padding: 0 3rem 0 0;
`;

const Note = SC.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  position: relative;
  @media ${minDevice.tablet} {
    flex-direction: row;
  }
`;

const Social = SC.div`
  display: flex;
  flex-wrap: wrap;
  @media ${minDevice.tablet} {
    margin-left: auto;
  }
`;

const SocialLink = SC.a`
  color: #181818;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin: 0 15px 0 0;
  background-image: linear-gradient(-90deg,#181818 0%,#181818 49.99%,#FD0009 50%,#FE00DD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 100%;
  background-size: 200%;
  
  &:hover {
    background-position: 0;
  }
  
  @media ${minDevice.tablet} {
    font-size: rem(16px);
    margin: rem(0 0 0 20px);
  }

  @media ${minDevice.laptop} {
    font-size: 14px;
    font-weight: normal;
  }
`;

const Nav = SC.nav`
  display: none;
  padding: 0 0 1rem;
  @media ${minDevice.laptop} {
    display: block;
  }
`;

const Ul = SC.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(380px);
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Li = SC.li`
  padding: 0 0 0.25rem;
  width: 10rem;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const NavLink = SC.a`
  color: #22262A;
  font-size: 14px;
  line-height: 20px;
  background-image: linear-gradient(-90deg,#181818 0%,#181818 49.99%,#FD0009 50%,#FE00DD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 100%;
  background-size: 200%;

  &:hover {
    background-position: 0;
  }
`;

const socialLinkItems = [
  {label: 'podcast', target: '_blank', href: 'https://podcast.ru/1591909301'},
  {label: 'linkedin', target: '_blank', href: 'https://www.linkedin.com/company/kotelov'},
  {label: 'яндекс.дзен', target: '_blank', href: 'https://zen.yandex.ru/kotelov'},
  {
    label: 'tiktok',
    target: '_blank',
    href: 'https://www.tiktok.com/@kotelov_com?lang=ru-RU&amp;is_copy_url=1&amp;is_from_webapp=v1',
  },
  {label: 'вконтакте', target: '_blank', href: 'https://vk.com/kotelov_com'},
  {label: 'youtube', target: '_blank', href: 'https://www.youtube.com/channel/UCki5zCJQYBWYfK4wtH94xpQ/featured'},
  {label: 'telegram', target: '_blank', href: 'https://t.me/evgeny_shmakov'},
];

const linkItems = [
  {label: 'Кейсы', href: 'https://kotelov.com/cases/'},
  {label: 'Аутстаффинг', href: 'https://kotelov.com/outstuff/'},
  {label: 'Тестирование ПО', href: 'https://kotelov.com/testirovanie_na_zakaz/'},
  {label: 'Блог', href: 'https://kotelov.com/blog/'},
  {label: 'HR', href: 'https://kotelov.com/hr/'},
  {label: 'О нас', href: 'https://kotelov.com/team/'},
  {label: 'Контакты', href: 'https://kotelov.com/contacts/'},
];

export const Footer = () => (
  <Container>
    <Content>
      <Contacts>
        <Email>
          <Link href="mailto:es.shmakov@gmail.com">es.shmakov@gmail.com</Link>
        </Email>
        <Link href="tel://+79537647035">+7 953 764 70 35</Link>
      </Contacts>
      <Nav>
        <Ul>
          {linkItems.map(({label, ...props}, index) => (
            <Li key={index}>
              <NavLink {...props}>{label}</NavLink>
            </Li>
          ))}
        </Ul>
      </Nav>
      <Note>
        <Copyright>© IT enjoy, {new Date().getFullYear()}</Copyright>
        <Social>
          {socialLinkItems.map(({label, ...props}, index) => (
            <SocialLink key={index} {...props}>
              {label}
            </SocialLink>
          ))}
        </Social>
      </Note>
    </Content>
  </Container>
);
