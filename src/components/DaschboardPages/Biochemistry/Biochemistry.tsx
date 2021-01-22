import React from 'react';
import {
    StyledContainer,
    StyledListContainer,
    StyledBiochemistrySwapContainer,
    StyledButton
} from './Biochemistry.styled';
import {BiochemistryList} from './BiochemistryList/BiochemistryList';

 export const Biochemistry: React.FC = () => {
    return (
        <StyledContainer>
            <StyledListContainer>
               <h4>Biochemia - lista wyników badań</h4>
               <BiochemistryList />
            </StyledListContainer>
            <StyledBiochemistrySwapContainer>
            <h4>Biochemia - wykres ostatnich wyników</h4>
            <h4>Biochemia - wynik ostatniego badania</h4>
            <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                </StyledButton>

            </StyledBiochemistrySwapContainer>
        </StyledContainer>
    )
}