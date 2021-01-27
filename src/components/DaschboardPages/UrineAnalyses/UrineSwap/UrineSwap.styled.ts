import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
`;


export const StyledButton = styled(Button)`
    width: 200px;
    height: 40px;
    margin: 15px;
`;

export const StyledSwapContainer = styled.div`
    grid-area: swap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 75vh;
`;

export const ChartContainer = styled.div`
    margin: 0;
    padding: 15px;
`;