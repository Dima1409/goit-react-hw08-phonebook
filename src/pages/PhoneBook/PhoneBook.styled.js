import styled from 'styled-components';
import '../../index.css';

const Heading = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const FormTitle = styled.h1`
font-size: 28px;
font-family: 'Rubik Vinyl', cursive;
color: ${(props)=>props.theme.text};
text-shadow: 0 0 2px ${(props)=>props.theme.text};
text-shadow: 1px 1px 2px ${(props)=>props.theme.main};
`;
const ListTitle = styled.h2`
margin-bottom: 10px;
text-align: start;
font-size: 20px;
font-family: 'Rubik Vinyl', cursive;
text-shadow: 1px 1px 2px ${(props)=>props.theme.main};
`;
const ContainerList = styled.div`
text-align: center;
margin: 0 auto;
background-color: ${(props)=>props.theme.body};
`;
const ListIsEmpty = styled.p`
font-size: 18px;
color: ${(props)=>props.theme.text};
`

export {Heading, FormTitle, ListTitle, ContainerList, ListIsEmpty};