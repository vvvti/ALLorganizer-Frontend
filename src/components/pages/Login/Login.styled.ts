import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import {Button} from '@material-ui/core';
import {Form} from 'formik';
import {NavLink} from 'react-router-dom';

export const StyledPaper = styled.div`
    margin-top: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
    background-color: hsl(339, 100%, 43%);
    margin: 0.7em 0;
`;

export const StyledForm = styled(Form)`
    margin-top: 1.5em;
    width: 100%;
`;
export const StyledButton = styled(Button)`
    margin: 1.5em 0;
`;
export const StyledRegisterPage = styled(NavLink)`
    text-decoration: none;
    margin: 1.5em;
    color: hsl(207, 73%, 53%);
`;
export const ErrorMessage = styled.div`
    color: hsl(0, 100%, 50%);
    margin: 0.5px;
`;