import styled from "styled-components";
import '../../index.css';

const Menu = styled.div`
display: flex; 
justify-content: space-between;
margin-left: auto;
align-items: center;
font-size: 12px;
@media screen and (min-width: 768px) {
font-size: 16px;
font-family: 'Permanent Marker', cursive;
}
`

const UserName = styled.p`
text-transform: uppercase;
margin-right: 8px;
text-shadow: 1px 1px 2px ${(props)=>props.theme.main};
`

const LogOut = styled.button`
display: flex;
border: none;
border-radius: 4px;
align-items: center;
background-color: ${(props)=>props.theme.main};
color: ${(props)=>props.theme.text};
margin: 0;
margin-right: 8px;
padding: 6px;
transition: box-shadow 0.3s;
&:hover {
box-shadow: 0 0 4px ${(props)=>props.theme.text};
cursor: pointer;
}
`

export {Menu, UserName, LogOut}