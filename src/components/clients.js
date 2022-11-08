import SC from '@emotion/styled';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {CustomSlider} from './customSlider';

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

const H3 = SC.h3`
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

const slideData = [
  {
    desc: "Крутая команда профессионалов, быстро адаптирующаяся под периодически изменяемые требования заказчика, качественно и в срок выполняющая поставленные задачи",
    src: 'https://kotelov.com/wp-content/uploads/2020/07/ka.jpg',
    executive: 'Ковтун Анастасия',
    position: 'Руководитель проектов S7 Airlines',
  },
  {
    desc: "KOTELOV оперативно предоставил мобильных и бэкенд разработчиков, что позволило усилить команду и точечно ускорить развитие проектов",
    src: 'https://kotelov.com/wp-content/uploads/2021/06/photo_2018-07-31_16-57-50-e1623402993971.jpg',
    executive: 'Олег Борисов',
    position: 'Руководитель проектов группы компаний "ПИК"',
  },
  {
    desc: "За время работы над проектом разработчики под руководством Котелова В.А. показали себя как команда профессионалов, успешно решивших все поставленные перед ними задачи и достигнувших цели проекта",
    src: 'https://kotelov.com/wp-content/uploads/2020/07/db.jpg',
    executive: 'Дмитрий Бутянов',
    position: 'PBE Майкрософт РУС',
  },
  {
    desc: "Ребята из Kotelov разработали масштабную систему, которая требовала крайне высокую техническую экспертность и позволила поднять сервис на борту самолетов на новый уровень",
    src: 'https://kotelov.com/wp-content/uploads/2020/07/al.jpg',
    executive: 'Александр Лукаш',
    position: 'Product owner S7 Airlines',
  },
  {
    desc: "Предложенные специалистами команды проектные решения по реализации требуемого функционала, позволили на выходе получить высококачественный продукт с удобным пользовательским интерфейсом. Все поставленные задачи выполнены в срок и в полном объеме",
    src: 'https://kotelov.com/wp-content/uploads/2020/07/bez-imeni-2.jpg',
    executive: 'Белимов Александр',
    position: 'Директор проектов RostelecomLabs',
  },
  {
    desc: "За время сотрудничества по ряду проектов компания KOTELOV зарекомендовала себя, как надежный партнер, всегда стремящийся максимально эффективно решить поставленные задачи, подобрать необходимые ресурсы. ",
    src: 'https://kotelov.com/wp-content/uploads/2022/05/photo_2020-07-16_12-26-52.jpg',
    executive: 'Кирилл Макаркин',
    position: 'Руководитель проектов цифровизации Брусники',
  },
];

export const Clients = props => (
  <Element name="clients">
    <Container>
      <Content>
        <H3>Клиенты о нас</H3>
      </Content>
      <CustomSlider>
        {slideData.map((o, i) => (
          <div key={i}>{o?.executive}</div>
        ))}
      </CustomSlider>
    </Container>
  </Element>
);
