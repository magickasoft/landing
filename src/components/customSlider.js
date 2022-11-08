import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SC from '@emotion/styled';
import {ArrowBackIos,ArrowForwardIos} from '@mui/icons-material';
import React from 'react';
import Slider from 'react-slick';

import {maxDevice} from '../styles';

const Controls = SC.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 0 30px 0 30px;
  }
`;

const Btn = SC.div`
  height: 2.5rem;
  width: 2.5rem;
  opacity: ${({disabled}) => disabled ? 0.25 : 1};
`;

export const CustomSlider = ({initialSlide = 0, children, ...props}) => {
  const slider = React.useRef();
  const [hasSetPosition, setHasSetPosition] = React.useState(false);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide,
    ...props,
  };

  React.useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current?.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  return (
    <>
      <Controls>
        <Btn onClick={slider.current?.slickPrev}>
          <ArrowBackIos />
        </Btn>
        <Btn onClick={slider.current?.slickNext}>
          <ArrowForwardIos />
        </Btn>
      </Controls>
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
    </>
  );
};
