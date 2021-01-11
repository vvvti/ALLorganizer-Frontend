import React from 'react'
import {StyledContainer, StyledCbcContainer, StyledCrpContainer, StyledAstContainer, StyledUrineContainer} from './DashboardGrid.styled';

export const DashboardGrid: React.FC = () => {
    return (
        <StyledContainer>
            
            <StyledCbcContainer>
            <h5>Morfologia</h5>
            </StyledCbcContainer>
            
            <StyledAstContainer><h5>Morfologia</h5></StyledAstContainer>
            <StyledCrpContainer><h5>Morfologia</h5></StyledCrpContainer>
            <StyledUrineContainer><h5>Morfologia</h5></StyledUrineContainer>
        </StyledContainer>
    )
}

