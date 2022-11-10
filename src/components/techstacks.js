import SC from '@emotion/styled';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {CustomSlider} from './customSlider';
import {TechCard} from './techCard';

const Container = SC.section`
  // background-image: linear-gradient(to bottom,#edecec 185px,#fff 185px);
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
    label: 'Backend',
    list: ['Java SE 8/11/18', 'Spring', 'Spring Boot', 'Hibernate', 'C#: NET', 'NET Core', 'ASP.NET Core', 'PHP', 'Ruby', 'Node JS', 'Python', 'Go', 'Dart', 'Redis', 'MongoDB', 'Kafka', 'RabbitMQ', 'ActiveMQ'],
  },
  {
    label: 'Frontend',
    list: ['JavaScript', 'Typescript', 'HTML5', 'CSS3', 'SASS', 'Less', 'React', 'Vue.js', 'Angular 6+', 'Redux', 'redux-saga', 'redux-toolkit', 'vuex', 'Rest', 'WebSockets', 'css modules', 'css-in-js', 'docker', 'postman', 'jest', 'SSR', 'styled-component', 'Flux', 'Mobx', 'Redux Thunk', 'next js / nuxt js', 'Axios', 'Formik', 'Redux Form', 'Yep', 'Husky', 'ESlint', 'Prettier', 'Commitlint', 'JSLint', 'Ant Design', 'Material UI', 'webpack', 'gulp.js', 'Babel', 'ES6', 'Stylus', 'CoffeeScript', 'Rollup', 'Lerna', 'Storybook', 'react-query', 'Apollo Client'],
  },
  {
    label: 'Platform apps',
    list: ['Swift', 'Kotlin', 'Dagger 2', 'Xcode', 'Android Studio', 'React Native', 'Flutter', 'Xamarin', 'Detox', 'Appium'],
  },
  {
    label: 'DevOps',
    list: ['Jenkins', 'TeamCity', 'GitLab', 'Bamboo', 'Github Actions', 'AWS CodePipeline', 'Terraform', 'Puppet', 'Ansible', 'AWS', 'Google Cloud Platform', 'Microsoft Azure', 'Huawei Cloud', 'Яндекс Облако', 'Mail.ru Cloud Solutions', 'Prometheus', 'Grafana', 'ELK Stack', 'Graylog', 'Grafana', 'Jaeger', 'Docker', 'Podman', 'Kubernetes', 'Rancher', 'Serverless'],
  },
  {
    label: 'QA',
    list: ['TestRail', 'SQL', 'NoSQL', 'Postman', 'Swagger', 'Fiddler', 'Charles', 'JMeter', 'SoapUI', 'Docker', 'Kafka', 'XCode', 'Android Studio', 'Selenium', 'Hermione', 'Nightwatch', 'Detox', 'Appium', 'AVA + Sinon.js', 'Jest', 'Mocha', 'Chai'],
  },
  {
    label: 'Analytics',
    list: [''],
  },
  {
    label: 'Design',
    list: ['Sketch', 'Adobe XD', 'UXPin', 'InVision', 'Flinto', 'Principle', 'Justinmind', 'Axure', 'Keynote', 'Hotjar', 'figma'],
  },
  {
    label: 'Product management / Project management',
    list: [''],
  },
  {
    label: 'C-level',
    list: ['CEO', 'CMO', 'CFO', 'CAO', 'CIO', 'CVO', 'COO', 'CSO', 'CTO'],
  },
];

export const TechStacks = props => (
  <Element name="techStacks">
    <Container>
      <Content>
        <H3>Технологии</H3>
      </Content>
      <CustomSlider
        responsive={[
          {
            breakpoint: 2560,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
      >
        {slideData.map((o, i) => (
          <TechCard key={i} {...o} />
        ))}
      </CustomSlider>
    </Container>
  </Element>
);
