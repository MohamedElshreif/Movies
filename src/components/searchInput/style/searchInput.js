import styled from 'styled-components/macro';

export const Input = styled.input`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 6rem;
  right: 0;
  width: 94%;
  padding: 32px 40px;
  box-sizing: border-box;
  outline: none;
  font-size: 17px;
  background: #202124;
  border: none;
  color: #eee;
  letter-spacing: 1px;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.6s ease-in-out;
  ::placeholder,
  ::-webkit-input-placeholder {
    text-transform: capitalize;
    color: #999;
  }
  :-ms-input-placeholder {
    text-transform: capitalize;
    color: #999;
  }
  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    padding: 18px 20px;
    font-size: 13px;
  }
`;
