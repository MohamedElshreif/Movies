import React, { useRef } from 'react';
import { Placeholder } from './style/image';
import LazyLoad from 'react-lazyload';
import Animate from 'react-smooth';

export default function LazyImage({ children, background }) {
  const refPlaceholder = useRef();
  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };
  const steps = [
    {
      style: {
        opacity: 0,
        transform: 'scale(0.9)',
      },
      duration: 0,
    },
    {
      style: {
        opacity: 1,
        transform: 'scale(1)',
      },
      duration: 500,
    },
  ];
  return (
    <LazyLoad once>
      <Placeholder ref={refPlaceholder} background={background} />
      <Animate steps={steps} onLoad={() => removePlaceholder()}>
        {children}
      </Animate>
    </LazyLoad>
  );
}
