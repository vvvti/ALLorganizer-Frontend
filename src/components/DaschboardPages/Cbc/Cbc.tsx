import React from 'react';
import {
    StyledContainer,
    StyledListContainer,
    StyledCbcSwapContainer,
    StyledButton,
    StyledLink
} from './Cbc.styled';
import {
    Route,
    useRouteMatch,
    Switch
  } from "react-router-dom";
import {CbcList} from './CbcList/CbcList';
import {CbcSwap} from './CbcSwap/CbcSwap';

 export const Cbc: React.FC = () => {
    let { path, url } = useRouteMatch();
    return (
        <StyledContainer>
            <StyledListContainer>
               <h4>Morfologia krwi - lista wyników badań</h4>
               <CbcList />
            </StyledListContainer>
            

            <StyledCbcSwapContainer>
            <Switch>
          <Route exact path={path}>
             <CbcSwap />
             <StyledLink to={`${url}/addCbc`}>
             <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                </StyledButton>
            </StyledLink>       
          </Route>          
        </Switch>
                
            </StyledCbcSwapContainer>
        </StyledContainer>
    )
}