import React from 'react';
import {RoutesConsts} from '../../../helpers/RoutesConsts';
import {StyledContainer, StyledH1} from './NotFoundPage.styled';
import {StyledNavLink} from './NotFoundPage.styled';

export const NotFoundPage: React.FC = () => {
    return (
        <StyledContainer>
            <StyledH1>404</StyledH1>
            <p>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?</p>
            <p>
                Let's go{' '}
                <StyledNavLink to={RoutesConsts.HOME}>
                    {' '}
                    home
                </StyledNavLink>{' '}
                and try from there.
            </p>
        </StyledContainer>
    );
};
