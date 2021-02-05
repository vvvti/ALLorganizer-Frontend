import React from 'react';
import {StyledContainer, StyledAllContainer, StyledFirstContainer, StyledSecondContainer, StyledThirdContainer} from './Surgeries.styled';

export const Surgeries: React.FC = () => {
    return (
        <StyledContainer>
            <StyledAllContainer><h1>All</h1></StyledAllContainer>
            <StyledFirstContainer><h4>First</h4></StyledFirstContainer>
            <StyledSecondContainer><h4>Second</h4></StyledSecondContainer>
            <StyledThirdContainer><h4>Third</h4></StyledThirdContainer>
        </StyledContainer>
    )
}

