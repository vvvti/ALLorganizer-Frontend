import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {colors} from '../../styles/theme'

export const StyledNavbar = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
    background-color: ${colors.backgroundPrimary};
    z-index: 100;
`;

export const StyledTitle = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.backgroundPrimary};
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 2.5em;
    font-weight: bold;

    @media (max-width: 1200px) {
        font-size: 24px;
    }
`;

export const StyledMenu = styled.div`
    grid-area: menu;
    flex-basis: 15em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    background-color: ${colors.backgroundPrimary};

    @media (max-width: 800px) {
        flex-basis: 100px;
    }
`;

export const LogoContainer = styled.div`
    height: 100%;
`;

export const Logo = styled.img`
    height: 70px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    margin: 1em;
    font-size: 1em;
`;