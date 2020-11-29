import styled from 'styled-components/macro';
import { EmotionSad } from '@styled-icons/remix-line/EmotionSad';

export const Container = styled.div`
  width: 60%;
  height: 75vh;
  margin: auto;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.p`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 500;
`;
export const Icon = styled(EmotionSad)`
  width: 210px;
`;
export const Head = styled.h1`
  font-size: 50px;
  text-transform: capitalize;
  letter-spacing: 4px;
  margin: 2px;
  font-weight: 700;
`;

export const Btn = styled.button`
  text-transform: capitalize;
  color: #fff;
  background: #555;
  padding: 11px 32px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-weight: 700;
  cursor: pointer;
`;
