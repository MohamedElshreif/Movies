import React from 'react';

import {
  Container,
  Content,
  Text,
  SocialMedia,
  Icon,
  LinkFooter,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
  GithubIcon,
} from './style/footer';

export default function Footer({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Content = function ({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Footer.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.SocialMedia = function ({ children, ...restProps }) {
  return (
    <SocialMedia {...restProps}>
      <Icon>
        <TwitterIcon />
      </Icon>
      <Icon>
        <GithubIcon />
      </Icon>
      <Icon>
        <LinkedinIcon />
      </Icon>
      <Icon>
        <MailIcon />
      </Icon>
    </SocialMedia>
  );
};

Footer.LinkFooter = function ({ to, children, ...restProps }) {
  return (
    <LinkFooter to={''} {...restProps}>
      {children}
    </LinkFooter>
  );
};
