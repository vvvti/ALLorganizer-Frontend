import styled from 'styled-components';
import {Button} from '@material-ui/core';


export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 340px 1fr;
    align-items: flex-start;
    grid-gap: 10px;
    grid-template-areas:
        'cbc cbc ast ast'
        'crp crp urine urine';
    margin: 20px 0;
`;

export const StyledCbcContainer = styled.div`
    grid-area: cbc;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
`;

export const StyledCrpContainer = styled.div`
    grid-area: crp;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
`;

export const StyledAstContainer = styled.div`
    grid-area: ast;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
`;

export const StyledUrineContainer = styled.div`
    grid-area: urine;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
`;

export const StyledButton = styled(Button)`
    width: 200px;
    height: 40px;
    margin: 15px;
`;
