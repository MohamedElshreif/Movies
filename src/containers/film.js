import React from 'react';
import { useHistory } from 'react-router-dom';
import Film from '../components/film';
import Feature from '../components/feature';
import { GetFilm } from '../store/actions';
import { useDispatch } from 'react-redux';
export default function ContainerFilm({ type, item, id, ...restProps }) {
  const dispatch = useDispatch();
  let history = useHistory();
  const filmHandle = (page, id) => {
    dispatch(GetFilm(id));
    history.push(`/${page}/${id}`);
  };
  return (
    <Film
      {...restProps}
      onClick={() => filmHandle(item.page, id)}
      id={id}
      type={type}
      page={item.page}
    >
      <Film.Image src={item.photo} />
      <Film.Title>{item.name}</Film.Title>
      <Feature.Reviews small>
        <Feature.Rating percentage={item.rating}>
          <Feature.Item />
          <Feature.Item />
          <Feature.Item />
          <Feature.Item />
          <Feature.Item />
        </Feature.Rating>
        {item.rating ? ((item.rating / 100) * 10).toFixed(1) : 0}
      </Feature.Reviews>
    </Film>
  );
}
