import React from 'react';
import {StyledContainer, StyledFirstContainer, StyledSecondContainer, StyledThirdContainer} from './Schedule.styled';

export const Schedule: React.FC = () => {
    return (
        <StyledContainer>            
            <StyledFirstContainer><h4>First</h4></StyledFirstContainer>
            <StyledSecondContainer><h4>Second</h4></StyledSecondContainer>
            <StyledThirdContainer><h4>Third</h4></StyledThirdContainer>
        </StyledContainer>
    )
}

