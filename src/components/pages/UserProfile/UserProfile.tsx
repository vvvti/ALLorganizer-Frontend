import React from 'react';
import {
    StyledPageContainer,
    StyledProfileContainer,
    StyledAvatar,
    StyledButton
} from './UserProfile.styled';

export const UserProfile: React.FC = () => {
    return (
        <StyledPageContainer>
            <StyledProfileContainer>
                <StyledAvatar>
                    
                </StyledAvatar>
                <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Logout
                </StyledButton>
            </StyledProfileContainer>
        </StyledPageContainer>
    )
}
