import React from 'react';
import {
    StyledFooter,
    StyledFooterContainer,
    StyledNavLink,
    StyledHeader,
    StyledListElement,
    StyledExternalLink
} from './Footer.styled';
import {RoutesConsts} from '../../helpers/RoutesConsts';
import {ALL, FACEBOOK, LINKEDIN, TWITTER} from './Footer.constans';

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
           <StyledFooterContainer>
                <div>
                    <StyledHeader>ALL organizer</StyledHeader>
                    <ul>
                        <StyledNavLink to={RoutesConsts.DASHBOARD}>
                            <StyledListElement>Rules</StyledListElement>
                        </StyledNavLink>
                        <StyledNavLink to={RoutesConsts.LOGIN}>
                            <StyledListElement>Privacy</StyledListElement>
                        </StyledNavLink>
                    </ul>
                </div>
                <div>
                    <StyledHeader>Contact data</StyledHeader>
                    <ul>
                        <StyledNavLink to={RoutesConsts.HOME}>
                            <StyledListElement>Home</StyledListElement>
                        </StyledNavLink>
                        <StyledNavLink to={RoutesConsts.HOME}>
                            <StyledListElement>About</StyledListElement>
                        </StyledNavLink>
                        <StyledNavLink to={RoutesConsts.HOME}>
                            <StyledListElement>Contact</StyledListElement>
                        </StyledNavLink>
                    </ul>
                </div>
                <div>
                    <StyledHeader>Info</StyledHeader>
                    <ul>
                        <StyledNavLink to={RoutesConsts.HOME}>
                            <StyledListElement>ALL</StyledListElement>
                        </StyledNavLink>
                        <StyledExternalLink href={ALL}>
                            <StyledListElement>Org</StyledListElement>
                        </StyledExternalLink>
                    </ul>
                </div>
                <div>
                    <StyledHeader>Support</StyledHeader>
                    <ul>
                        <StyledListElement>support@allorganizer.com</StyledListElement>
                        <StyledListElement>+48 200 200 200</StyledListElement>
                    </ul>
                </div>
                <div>
                    <StyledHeader>Follow Us</StyledHeader>
                    <ul>
                        <StyledExternalLink href={FACEBOOK}>
                            <StyledListElement>Facebook</StyledListElement>
                        </StyledExternalLink>
                        <StyledExternalLink href={TWITTER}>
                            <StyledListElement>Twitter</StyledListElement>
                        </StyledExternalLink>
                        <StyledExternalLink href={LINKEDIN}>
                            <StyledListElement>LinkedIn</StyledListElement>
                        </StyledExternalLink>
                    </ul>
                </div>
                <div>
                    <StyledHeader>ALL organizer Office</StyledHeader>
                    <ul>
                        <StyledListElement>Downing Street 10</StyledListElement>
                        <StyledListElement>London</StyledListElement>
                        <StyledListElement>United Kingdom</StyledListElement>
                    </ul>
                </div>
            </StyledFooterContainer>
        </StyledFooter>
    )
}

