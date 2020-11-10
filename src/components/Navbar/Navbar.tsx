import React from 'react';
import {StyledMenu, StyledNavbar, LogoContainer, StyledTitle, StyledNavLink} from './Navbar.styled'
import {RoutesConsts} from '../../helpers/RoutesConsts'

export const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <StyledMenu>
                <LogoContainer>
                    <StyledNavLink to={RoutesConsts.HOME}></StyledNavLink>
                </LogoContainer>
            </StyledMenu>
            <StyledTitle>ALL Organizer</StyledTitle>
            <StyledMenu>
                <StyledNavLink to={RoutesConsts.HOME}>HOME</StyledNavLink>
                <StyledNavLink to={RoutesConsts.LOGIN}>Login</StyledNavLink>
                <StyledNavLink to={RoutesConsts.REGISTRATION}>Register</StyledNavLink>
            </StyledMenu>
        </StyledNavbar>
    )
}
