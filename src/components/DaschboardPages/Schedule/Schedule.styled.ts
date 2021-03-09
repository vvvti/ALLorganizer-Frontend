import styled from 'styled-components';
import {colors} from '../../../styles/theme';


export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    grid-gap: 10px;
    grid-template-areas:
        'first second third'
        'first second third'
        'first second third';
    margin: 20px 0;
`;

export const StyledFirstContainer = styled.div`
    grid-area: first;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    height: 73vh;
`;

export const StyledSecondContainer = styled.div`
    grid-area: second;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    height: 73vh;
`;

export const StyledThirdContainer = styled.div`
    grid-area: third;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    height: 73vh;
`;