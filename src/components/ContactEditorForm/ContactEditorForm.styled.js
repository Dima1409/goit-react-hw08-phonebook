import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  padding: 24px;
  max-width: 80%;
  @media screen and (min-width: 768px) {
font-size: 16px;
}
`;

export const Buttons = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-around;
`