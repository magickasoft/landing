import SC from '@emotion/styled';
import React from 'react';

import {minDevice} from '../styles';


const Container = SC.div`
  overflow: hidden;
  padding: 18px 0;
`;

const Ul = SC.ul`
  margin: 0;
  display: flex;
  align-items: center;
  width: max-content;
  animation: logosRunningLine 25s linear infinite alternate;
  @media ${minDevice.laptop} {
    animation-duration: 20s;
  }
`;

const Li = SC.li`
  list-style-type: none;
  max-width: 110px;
  height: 39px;
  margin: 0 20px;
  opacity: 0.9;
  @media ${minDevice.tablet} {
    margin: 0 30px;
  }
  @media ${minDevice.laptop} {
    max-width: 177px;
    height: 62px;
    margin: 0 42px;
  }
`;

const Img = SC.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  border: 0;
  max-width: 100%; 
`;

const companiesList = [
  {
    srcSet: '/static/companies/bck.webp',
    src: '/static/companies/bck.png',
  },
  {
    srcSet: '/static/companies/vileda.webp',
    src: '/static/companies/vileda.png',
  },
  {
    srcSet: '/static/companies/euroxim.webp',
    src: '/static/companies/euroxim.png',
  },
  {
    srcSet: '/static/companies/bks.webp',
    src: '/static/companies/bks.png',
  },
  {
    srcSet: '/static/companies/sber.webp',
    src: '/static/companies/sber.png',
  },
  {
    srcSet: '/static/companies/rostelekom.webp',
    src: '/static/companies/rostelekom.png',
  },
  {
    srcSet: '/static/companies/lanit.webp',
    src: '/static/companies/lanit.png',
  },
  {
    srcSet: '/static/companies/tkb.webp',
    src: '/static/companies/tkb.png',
  },
  {
    srcSet: '/static/companies/ibs.webp',
    src: '/static/companies/ibs.png',
  },
  {
    srcSet: '/static/companies/bfggroup.webp',
    src: '/static/companies/bfggroup.png',
  },
];

const SourceItem = ({src, srcSet}) => (
  <Li>
    <picture>
      {srcSet && <source srcSet={srcSet} type="image/webp" />}
      {src && <Img src={src} alt="" loading="eager" width="177" height="62" />}
    </picture>
  </Li>
);

export const CompaniesList = props => (
  <Container>
    <Ul>
      {companiesList.map((o, i) => (
        <SourceItem key={i} {...o} />
      ))}
    </Ul>
  </Container>
);
