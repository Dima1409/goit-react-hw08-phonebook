import styled from 'styled-components';
import '../../index.css';

const Title = styled.h1`
text-align: center;
margin: 10% 0;
font-size: 40px;
color: ${(props)=>props.theme.text};
font-family: 'Rubik Vinyl', cursive;
text-shadow: ${(props)=>props.theme.main} 1px 0 10px;
`
const Text = styled.p`
text-align: center;
`

export {Title, Text};