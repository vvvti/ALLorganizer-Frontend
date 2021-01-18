import styled from 'styled-components';
import {colors} from '../../../styles/theme';
import {Button} from '@material-ui/core';


export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 340px 1fr;
    align-items: flex-start;
    grid-gap: 10px;
    grid-template-areas:
        'list list list swap swap';
`;

export const StyledListContainer = styled.div`
    grid-area: list;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    height: 75vh;
`;

export const StyledCrpSwapContainer = styled.div`
    grid-area: swap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    height: 75vh;
`;

export const StyledButton = styled(Button)`
    width: 200px;
    height: 40px;
    margin: 15px;
`;