import React from 'react';
import Error from '../../components/error';
import { useHistory } from 'react-router-dom';

export default function () {
  let history = useHistory();
  const handleBack = () => {
    history.replace('/');
  };
  return (
    <Error>
      <Error.Icon />
      <Error.Head>404</Error.Head>
      <Error.Text>page not found</Error.Text>
      <Error.Btn onClick={() => handleBack()}>Back to Home</Error.Btn>
    </Error>
  );
}
