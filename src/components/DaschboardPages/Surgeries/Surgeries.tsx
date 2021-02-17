import React from 'react';
import {StyledContainer, StyledAllContainer, StyledFirstContainer, StyledSecondContainer, StyledThirdContainer} from './Surgeries.styled';
import {SurgeriesList} from './SurgeriesList/SurgeriesList';

export const Surgeries: React.FC = () => {
    return (
        <StyledContainer>
            <StyledAllContainer>
                <SurgeriesList />
            </StyledAllContainer>
            <StyledFirstContainer><h4>First</h4></StyledFirstContainer>
            <StyledSecondContainer><h4>Second</h4></StyledSecondContainer>
            <StyledThirdContainer><h4>Third</h4></StyledThirdContainer>
        </StyledContainer>
    )
}

