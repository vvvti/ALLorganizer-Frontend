import styled from 'styled-components';
import {Avatar, Button} from '@material-ui/core';
import {colors} from '../../../styles/theme';

export const StyledPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledProfileContainer = styled.div`
    margin-top: 8em;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    height: 65vh;
    width: 50vw;
    padding: 2em;
`;

export const StyledAvatar = styled(Avatar)`
    align-self: center;
    justify-self: center;
    width: 8em;
    height: 8em;
    margin-bottom: 20px;
`; 

export const StyledButton = styled(Button)`
    height: 40px;
    margin: 15px;
`;