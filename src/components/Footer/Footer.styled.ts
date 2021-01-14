import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {colors} from '../../styles/theme'

export const StyledFooter = styled.div`
    background-color: ${colors.backgroundPrimary};
    z-index: 2000;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 8em;
    width: 100%;
`;

export const StyledFooterContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin: auto;
    color: white;
`;



export const StyledListElement = styled.li`
    text-decoration: none;
    list-style: none;
    font-size: 12px;
    margin-left: -40px;
`;

export const StyledHeader = styled.h6`
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 1.5em;
    text-transform: uppercase;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.link};
    background-color: ${colors.backgroundPrimary};

    &:hover {
        color: ${colors.sliderBlue};
    }
`;

export const StyledExternalLink = styled.a`
    text-decoration: none;
    color: ${colors.link};
    background-color: ${colors.backgroundPrimary};

    &:hover {
        color: ${colors.sliderBlue};
    }
`;
