import React from 'react';
import Animate from 'react-smooth';
import {
  Container,
  Title,
  Time,
  Reviews,
  Date,
  Text,
  Item,
  Btn,
  Group,
  Content,
  StarIcon,
  PlayIcon,
  RatingPercentage,
  ListStarsFill,
  StarsFill,
  Rating,
  StarFillIcon,
  PlayBtn,
} from './style/feature';

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Content = function FeatureContent({ children, ...restProps }) {
  const steps = [
    {
      style: {
        opacity: 0,
        transform: 'translateY(60px)',
      },
      duration: 500,
    },
    {
      style: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      duration: 1000,
    },
  ];
  return (
    <Animate steps={steps}>
      <Content {...restProps}>{children}</Content>
    </Animate>
  );
};
Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Feature.Reviews = function FeatureReviews({ small, children, ...restProps }) {
  return (
    <Reviews {...restProps} small={small}>
      {children}
    </Reviews>
  );
};
Feature.Rating = function FeatureRating({
  percentage,
  children,
  ...restProps
}) {
  return (
    <RatingPercentage {...restProps}>
      <ListStarsFill width={percentage}>
        <StarsFill>
          <StarFillIcon />
        </StarsFill>
        <StarsFill>
          <StarFillIcon />
        </StarsFill>
        <StarsFill>
          <StarFillIcon />
        </StarsFill>
        <StarsFill>
          <StarFillIcon />
        </StarsFill>
        <StarsFill>
          <StarFillIcon />
        </StarsFill>
      </ListStarsFill>
      <Rating>{children}</Rating>
    </RatingPercentage>
  );
};
Feature.Item = function FeatureRating({ ...restProps }) {
  return (
    <Item {...restProps}>
      <StarIcon />
    </Item>
  );
};
Feature.Date = function FeatureDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};
Feature.Time = function FeatureTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};
Feature.Text = function FeatureText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Feature.Btn = function FeatureBtn({ children, ...restProps }) {
  return (
    <Btn {...restProps}>
      <PlayBtn>
        <PlayIcon />
      </PlayBtn>
      {children}
    </Btn>
  );
};
Feature.Group = function FeatureGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
