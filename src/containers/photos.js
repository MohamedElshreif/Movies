import React from 'react';
import Photo from '../components/photos';
import { v4 as uuidv4 } from 'uuid';

export default function ContainerPhoto({ data, value, index, ...restprops }) {
  const { backdrop, poster } = data;
  return (
    <Photo {...restprops} value={value} index={index}>
      {backdrop ? (
        <>
          <Photo.Title>Backdrops</Photo.Title>
          <Photo.Content>
            {backdrop.map((back) => {
              return <Photo.BackDrops key={uuidv4()} src={back} />;
            })}
          </Photo.Content>
        </>
      ) : null}
      {poster ? (
        <>
          <Photo.Title>Posters</Photo.Title>
          <Photo.Content>
            {poster.map((post) => {
              return <Photo.Poster key={uuidv4()} src={post} />;
            })}
          </Photo.Content>
        </>
      ) : null}
    </Photo>
  );
}
