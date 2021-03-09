import React from 'react';
import {StyledContainer, StyledFirstContainer, StyledSecondContainer, StyledThirdContainer} from './Schedule.styled';

export const Schedule: React.FC = () => {
    return (
        <StyledContainer>            
            <StyledFirstContainer><h4>Zabiegi</h4></StyledFirstContainer>
            <StyledSecondContainer><h4>Lekarstwa</h4></StyledSecondContainer>
            <StyledThirdContainer><h4>Plan protokołu</h4></StyledThirdContainer>
        </StyledContainer>
    )
}

