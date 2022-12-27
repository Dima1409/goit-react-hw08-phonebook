import styled from "styled-components";

const Form = styled.form`
background-color: ${(props)=>props.theme.main};
display: flex;
flex-direction: column;
padding: 20px 10px;
margin: 0 auto;
margin-bottom: 12px;
border-radius: 8px;
box-shadow: 0 2px 8px ${(props)=>props.theme.text};
@media screen and (min-width: 768px) {
max-width: 40%;
padding: 40px 20px;
}
`;
const LabelForm = styled.label`
position: relative;
font-size: 16px;
text-align: start;
margin-bottom: 5px;
display: flex;
justify-content: end;
align-items: center;
@media screen and (min-width: 768px) {
font-size: 22px;
}
`;

const LabelInput = styled.input`
margin-left: 10px;
width: 65%;
padding: 6px;
font-size: 14px;
outline: none;
border-radius: 4px;
color: ${(props)=>props.theme.text};
background-color: ${(props)=>props.theme.input};
&:invalid {
    border: 1px solid orange;
}
&:valid {
    border: 1px solid green;
}

@media screen and (min-width: 768px) {
max-width: 60%;
font-size: 16px;
}
@media screen and (min-width: 1280px) {
max-width: 50%;
}
`;

const ButtonSubmit = styled.button`
margin: 10px auto;
padding: 6px;
color: #13132e;
background-color: #ccca41;
max-width: 140px;
font-size: 14px;
border: none;
border-radius: 4px;
transition: all 0.3s;
@media screen and (min-width: 768px) {
max-width: 150px;
font-size: 22px;
}
&:hover:not(:disabled) {
    cursor: pointer;
    box-shadow: 0 0 8px ${(props)=>props.theme.text};
}
&:disabled {
    background-color: grey;
}
`;

export {Form, LabelForm, LabelInput, ButtonSubmit};