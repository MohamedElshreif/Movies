import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContainerFilm from '../../containers/film';
import Search from '../../components/search';
import { v4 as uuidv4 } from 'uuid';

export default function SearchPage() {
  const filteredArray = useSelector((state) => state.filtered);
  const headName = useSelector((state) => state.search);
  const history = useHistory();
  const filmsItems = [...filteredArray];
  useEffect(() => {
    if (filmsItems.length === 0) {
      history.goBack();
    }
  });
  return (
    <>
      {filmsItems.length !== 0 ? (
        <Search>
          <Search.Head>Results For: {headName}</Search.Head>
          <Search.Content>
            {filmsItems.map((film) => (
              <ContainerFilm
                key={uuidv4()}
                item={film}
                id={film.id}
                type='row'
              />
            ))}
          </Search.Content>
        </Search>
      ) : null}
    </>
  );
}
