import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {colors} from '../../styles/theme'

export const StyledFooter = styled.div`
    background-color: ${colors.backgroundPrimary};
    padding: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 100%;
`;