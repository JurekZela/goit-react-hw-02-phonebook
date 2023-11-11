import { styled } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';


export const Button = styled.button`
padding: 5px;
border: 1px solid black;
&:hover {
    background-color: blue;
    color: black;
}
`;

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 8px;
width: 320px;
border: 1px solid black;
padding: 10px;
`;

export const StyledField = styled(Field)`
padding: 4px;
font-size: inherit;
`;

export const StyledLabel = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
`;

export const ErrorMsg = styled(ErrorMessage)`
font-size: 12px;
color: red;
`;