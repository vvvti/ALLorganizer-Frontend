import React from 'react';
import {
    StyledContainer,
    StyledListContainer,
    StyledCrpSwapContainer,
    StyledButton
} from './Crp.styled';
import {CrpList} from './CrpList/CrpList';

 export const Crp: React.FC = () => {
    return (
        <StyledContainer>
            <StyledListContainer>
               <h4>Białko C-reaktywne (CRP) - lista wyników badań</h4>
               <CrpList />
            </StyledListContainer>
            <StyledCrpSwapContainer>
            <h4>Białko C-reaktywne (CRP) - wykres ostatnich wyników</h4>
            <h4>Białko C-reaktywne (CRP) - wynik ostatniego badania</h4>
            <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                </StyledButton>

            </StyledCrpSwapContainer>
        </StyledContainer>
    )
}