import styled from "styled-components";

const PassButton = styled.button`
position: absolute;
right: 5px;
border: none;
background-color: transparent;
& > svg {
    fill: ${(props)=>props.theme.text};

    &:hover {
        cursor: pointer;
    }
}
`

export {PassButton};