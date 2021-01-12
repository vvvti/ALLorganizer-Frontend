import React from 'react'
import {
    StyledContainer,
    StyledCbcContainer,
    StyledCrpContainer,
    StyledAstContainer,
    StyledUrineContainer,
    StyledButton
} from './DashboardGrid.styled';

export const DashboardGrid: React.FC = () => {
    return (
        <StyledContainer>
            
            <StyledCbcContainer>
                <h5>Morfologia</h5>
                    <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                    </StyledButton>
            </StyledCbcContainer>            
            <StyledAstContainer>
                <h5>Biochemia</h5>
                <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                </StyledButton>
            </StyledAstContainer>
            <StyledCrpContainer>
                <h5>CRP</h5>
                <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                </StyledButton>
            </StyledCrpContainer>
            <StyledUrineContainer>
                <h5>Badania moczu</h5>
                <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                </StyledButton>
            </StyledUrineContainer>
        </StyledContainer>
    )
}

