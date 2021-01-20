import React from 'react';
import {
    StyledContainer,
    StyledListContainer,
    StyledCbcSwapContainer,
    StyledButton
} from './Cbc.styled';
import {CbcList} from './CbcList/CbcList';

 export const Cbc: React.FC = () => {
    return (
        <StyledContainer>
            <StyledListContainer>
               <h4>Morfologia krwi - lista wyników badań</h4>
               <CbcList />
            </StyledListContainer>
            <StyledCbcSwapContainer>
            <h4>Morfologia krwi - wykres ostatnich wyników</h4>
            <h4>Morfologia krwi - wynik ostatniego badania</h4>
            <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                </StyledButton>

            </StyledCbcSwapContainer>
        </StyledContainer>
    )
}