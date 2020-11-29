import React, { useState } from 'react';
import ContainerHeader from '../../containers/header';
import { useSelector } from 'react-redux';
import Carousel from '../../components/carousel';
import Person from '../../components/person';
import DescriptionContiner from '../../containers/description';
import ContainerPhoto from '../../containers/photos';
import Tabs from '../../components/tabs';
import LazyLoad from '../../lazyload/component';
import { v4 as uuidv4 } from 'uuid';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SingleFilm() {
  const film = useSelector((state) => state.single_film);
  const [value, setValue] = useState(0);
  const item = { ...film };
  const creaters = [...item.creaters];
  const photos = { ...item.photos };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <LazyLoad>
      <ContainerHeader film={item} />
      <Tabs>
        <Tabs.Bar>
          <Tabs.Content handleChange={handleChange} value={value}>
            <Tabs.Tab label='overview' {...a11yProps(0)} />
            <Tabs.Tab label='videos' {...a11yProps(1)} />
            <Tabs.Tab label='photos' {...a11yProps(2)} />
          </Tabs.Content>
        </Tabs.Bar>
        <DescriptionContiner value={value} index={0} data={item}>
          <Carousel>
            <Carousel.Title>Cast</Carousel.Title>
            <Carousel.Content>
              {creaters.map((item) => {
                const { id, photo, name, character } = item;
                return (
                  <Person key={uuidv4()} id={id}>
                    <Person.Image src={photo} />
                    <Person.Title>{name}</Person.Title>
                    <Person.Text>{character}</Person.Text>
                  </Person>
                );
              })}
            </Carousel.Content>
          </Carousel>
        </DescriptionContiner>
        <DescriptionContiner value={value} index={1} data={item} />
        <ContainerPhoto value={value} index={2} data={photos} />
      </Tabs>
    </LazyLoad>
  );
}
