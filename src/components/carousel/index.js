import React, { useEffect, useState, useRef } from 'react';
import {
  Container,
  Title,
  Slider,
  SliderContent,
  Btn,
  BtnRight,
  BtnLeft,
} from './style/carsousel';

export default function Carousel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Carousel.Content = function CarouselContent({ id, children, ...restProps }) {
  const [carousel, setCarousel] = useState(0);
  const [show, setShow] = useState(0);
  const slider = useRef();
  useEffect(() => {
    setShow(slider.current.scrollWidth - slider.current.clientWidth);
    slider.current.scrollTo({
      top: 0,
      left: carousel,
      behavior: 'smooth',
    });
  });
  const scrollHandle = (type) => {
    if (type === 'right') {
      const lensScroll =
        slider.current.scrollWidth -
        (slider.current.scrollLeft + slider.current.clientWidth);
      if (slider.current.clientWidth <= lensScroll) {
        setCarousel(carousel + (slider.current.clientWidth - 92));
      } else {
        setCarousel(carousel + lensScroll);
      }
    } else if (type === 'left') {
      if (carousel >= slider.current.clientWidth) {
        setCarousel(carousel - (slider.current.clientWidth - 92));
      } else {
        setCarousel(carousel - carousel);
      }
    }
  };

  return (
    <Slider {...restProps}>
      <Btn
        dir='left'
        onClick={() => scrollHandle('left')}
        style={{ display: `${carousel === 0 ? 'none' : 'block'}` }}
      >
        <BtnLeft />
      </Btn>
      <SliderContent ref={slider}>{children}</SliderContent>
      <Btn
        dir='right'
        onClick={() => scrollHandle('right')}
        style={{
          display: `${carousel === show ? 'none' : 'block'}`,
        }}
      >
        <BtnRight />
      </Btn>
    </Slider>
  );
};

Carousel.Title = function CarouselTitle({ to, children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
