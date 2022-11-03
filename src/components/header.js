import React from 'react';
import SC from '@emotion/styled';
import {Icon} from './icon';
import {Text} from './common';
import {maxDevice, theme} from '../styles';

const Container = SC.header`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({active}) => (active ? '#000000' : '#00000038')};
`;

const Content = SC.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.75rem;
  margin: 0 140px 0 140px;
  @media ${maxDevice.tablet} {
    margin: 0 30px 0 30px;
    height: 3.5rem;
  }
  @media ${maxDevice.mobileL} {
    margin: 0 30px 0 30px;
    height: 3.5rem;
  }
`;

const SCIcon = SC(Icon)`
  background-color: #fff;
  border-radius: 50%;
  margin-left: 15px;
`;

const Label = SC.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  @media ${maxDevice.tablet} {
    display: none
  }
`;

const Link = SC.a`
  font-size: 0.9rem;
  line-height: 1.125rem;
  color: #FFFFFF;
`;

const Row = SC.div`
  display: flex;
  flex-direction: row;
`;

const useHeaderScroll = () => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    window?.addEventListener('scroll', () => {
      setActive(window?.scrollY >= 400);
    });
  }, []);

  return [active];
};

export const Header = props => {
  const [active] = useHeaderScroll();

  return (
    <Container active={active}>
      <Content>
        <Text color={theme.colors.White}>
          <strong>KOTELOV</strong>
        </Text>
        <Row>
          <Label>
            <Link href="tel://+79537647035">+7 953 764 70 35</Link>
            <Link href="mailto:es.shmakov@gmail.com">es.shmakov@gmail.com</Link>
          </Label>
          <Link href="https://t.me/evgeny_shmakov">
            <SCIcon name="telegram" size={32} />
          </Link>
          <Link href="https://wa.me/79537647035">
            <SCIcon name="whatsApp" size={32} />
          </Link>
        </Row>
      </Content>
    </Container>
  );
};
