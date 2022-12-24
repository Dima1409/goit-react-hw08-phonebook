import styled from "styled-components";

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
min-height: 50px;
padding-bottom: 10px;
border-bottom: 1px solid ${(props)=>props.theme.text};
`

export {Header};