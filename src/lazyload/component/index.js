import React, { useRef } from 'react';
import { Placeholder } from './style/lazyload';
import LazyLoad from 'react-lazyload';
import Animate from 'react-smooth';

export default function Lazyload({ children }) {
  const refPlaceholder = useRef();
  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };
  const steps = [
    {
      style: {
        opacity: 0,
      },
      duration: 200,
    },
    {
      style: {
        opacity: 1,
      },
      duration: 300,
    },
  ];
  return (
    <LazyLoad once>
      <Placeholder ref={refPlaceholder} />
      <Animate steps={steps} onLoad={() => removePlaceholder()}>
        {children}
      </Animate>
    </LazyLoad>
  );
}
