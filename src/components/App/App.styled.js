import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body {
    background: ${(props)=>props.theme.body};
    color: ${(props)=>props.theme.text};
}
`
const Container = styled.div`
width: 310px;
margin: 0 auto;
padding: 20px 4px;
position: relative;
@media screen and (min-width: 768px) {
width: 768px;
}
@media screen and (min-width: 1280px) {
width: 1280px;
}
`
const StyledApp = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.body};
`;


export {Container, Global, StyledApp};