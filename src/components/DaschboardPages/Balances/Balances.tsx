import React from 'react';
import {StyledContainer, StyledAllContainer, StyledFirstContainer} from './Balances.styled';

export const Balances: React.FC = () => {
    return (
        <StyledContainer>
            <StyledAllContainer><h1>All</h1></StyledAllContainer>
            <StyledFirstContainer><h4>First</h4></StyledFirstContainer>
            
        </StyledContainer>
    )
}