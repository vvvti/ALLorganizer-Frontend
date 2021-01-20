import React from 'react';
import {
    StyledContainer,
    StyledListContainer,
    StyledUrineSwapContainer,
    StyledButton
} from './UrineAnalyses.styled';
import {UrineList} from './UrineList/UrineList';

 export const UrineAnalyses: React.FC = () => {
    return (
        <StyledContainer>
            <StyledListContainer>
               <h4>Badania moczu - lista wyników badań</h4>
               <UrineList />
            </StyledListContainer>
            <StyledUrineSwapContainer>
            <h4>Badania moczu - wykres ostatnich wyników</h4>
            <h4>Badania moczu - wynik ostatniego badania</h4>
            <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                </StyledButton>

            </StyledUrineSwapContainer>
        </StyledContainer>
    )
}