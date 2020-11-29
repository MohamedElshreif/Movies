import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from '../../lazyload/image';
import {
  Container,
  Image,
  Title,
  Desc,
  List,
  Item,
  Table,
  Info,
  FacebookIcon,
  TwitterIcon,
  Group,
  ImageContent,
  ImageError,
  BrokenImageIcon,
  LogoInstagramIcon,
  ImdbIcon,
  LinkDesc,
  InsertLinkIcon,
  Content,
} from './style/description';

export default function Description({ children, value, index, ...restProps }) {
  return (
    <Container
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...restProps}
    >
      {value === index && <>{children}</>}
    </Container>
  );
}

Description.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

Description.Content = function DescriptionContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Description.Image = function DescriptionImage({ src, ...restProps }) {
  return (
    <ImageContent>
      {src ? (
        <LazyImage background='#202124'>
          <Image
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${src}.jpg`}
            {...restProps}
            alt={src}
          />
        </LazyImage>
      ) : (
        <ImageError>
          <BrokenImageIcon />
        </ImageError>
      )}
    </ImageContent>
  );
};

Description.Link = function DescriptionLink({ children, ...restProps }) {
  return <LinkDesc {...restProps}>{children}</LinkDesc>;
};

Description.Info = function DescriptionInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
Description.Group = function DescriptionGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Description.Title = function DescriptionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Description.Desc = function DescriptionDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};

Description.Table = function DescriptionTable({ children, ...restProps }) {
  return <Table {...restProps}>{children}</Table>;
};

Description.Social = function DescriptionSocial({ social, ...restProps }) {
  const socialList = {
    facebook: <FacebookIcon />,
    twitter: <TwitterIcon />,
    instagram: <LogoInstagramIcon />,
    imdb: <ImdbIcon />,
    link: <InsertLinkIcon />,
  };
  return (
    <List {...restProps}>
      {social &&
        Object.keys(social).map((item) => {
          return (
            <Item key={item}>
              <a href={social[item]}>{socialList[item]}</a>
            </Item>
          );
        })}
    </List>
  );
};
