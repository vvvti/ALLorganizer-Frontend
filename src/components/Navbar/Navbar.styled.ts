import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const StyledNavbar = styled.div`
    display: flex;
    height: 5em;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
    background-color: hsl(240, 2%, 16%);
`;

export const StyledTitle = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background-color: hsl(240, 2%, 16%);
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
    background-color: hsl(240, 2%, 16%);

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