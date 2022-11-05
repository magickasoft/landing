import React from 'react';
import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import {Element} from 'react-scroll';
import {Label, Section} from '../common';
import {maxDevice, minDevice} from '../../styles';
import {Item} from './item';
import {list} from './data';

const Container = SC.div`
  // background-image: url("/static/images/cover.jpeg");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  overflow: hidden;
  @keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;

const Layout = SC(Section)`
  // background: rgb(0,0,0);
  // background: linear-gradient(0.69deg, #000000 0.73%, rgba(0, 0, 0, 0) 38.64%), linear-gradient(180deg, rgba(0, 5, 24, 0.67) 0%, rgba(0, 36, 52, 0.0201) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.3015) 100%);
  display: flex;
  align-items: flex-end;
  padding: 120px 140px 90px 140px;
  @media ${maxDevice.tablet} {
    align-items: flex-start;
    padding: 120px 30px 90px 30px;
  }
  @media ${maxDevice.mobileL} {
    align-items: flex-start;
    padding: 90px 30px 90px 30px;
  }
`;

const Content = SC.div`
  @media ${minDevice.tablet} {
    width: 560px;
  }
`;

const List = SC(Grid)`
  margin-top: 60px;
  @media ${minDevice.laptopL} {
    max-width: 85%; 
    margin: 60px auto 0px auto; 
  }
`;

export const Intro = props => (
  <Element name="intro">
    <Container>
      <Layout>
        <div>
          <Content>
            <Label>Создаём IT команды для технологических проектов</Label>
          </Content>
          <List container spacing={3}>
            {list.map((o, i) => (
              <Grid key={o?.label || i} item xs={12} sm={6} md={6} lg={4} xl={4}>
                <Item key={i} {...o} />
              </Grid>
            ))}
          </List>
        </div>
      </Layout>
    </Container>
  </Element>
);
