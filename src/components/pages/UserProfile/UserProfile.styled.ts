import styled from 'styled-components';
import {Avatar} from '@material-ui/core';

export const StyledPageContainer = styled.div`
    display: grid;
`;

export const StyledProfileContainer = styled.div`
    margin-top: 8em;
`;

export const StyledAvatar = styled(Avatar)`
    align-self: center;
    justify-self: center;
    width: 8em;
    height: 8em;
    margin-bottom: 20px;
`; 