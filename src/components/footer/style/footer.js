import styled from 'styled-components/macro';
import { Link as LinkCopyRight } from 'react-router-dom';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Mail } from '@styled-icons/feather/Mail';
import { Github } from '@styled-icons/evaicons-solid/Github';

export const TwitterIcon = styled(Twitter)``;
export const LinkedinIcon = styled(Linkedin)``;
export const MailIcon = styled(Mail)``;
export const GithubIcon = styled(Github)``;

export const Container = styled.div`
  padding-left: 50px;
  padding-top: 60px;
  padding-bottom: 35px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-top: 23px;
    padding-bottom: 0px;
  }
`;

export const Content = styled.div``;

export const SocialMedia = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  margin-top: 20px;
  font-size: 19px;
  ${TwitterIcon},${LinkedinIcon},${MailIcon},${GithubIcon} {
    width: 22px;
    @media (max-width: 768px) {
      width: 18px;
    }
  }
`;

export const Icon = styled.li`
  margin-right: 19px;
  cursor: pointer;
  color: #80868b;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #eee;
    transform: scale(1.04);
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: #80868b;
  margin: 0;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const LinkFooter = styled(LinkCopyRight)`
  color: #80868b;
`;
