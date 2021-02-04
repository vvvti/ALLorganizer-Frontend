import styled from 'styled-components';
import {Button} from '@material-ui/core';


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

export const StyledLastAnalyses = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    height: 8em;
    width: 90%;
    color: grey;
    font-size: 1.2rem;
`;

export const StyledHeader = styled.h4`
    color: gray;
`;

export const StyledResult = styled.div`
    font-size: 1.2rem;
    color: #8884d8;
`;