import React from 'react';
import {
    StyledContainer,
    StyledListContainer,
    StyledUrineSwapContainer,
    StyledButton,
    StyledLink
} from './UrineAnalyses.styled';
import {UrineList} from './UrineList/UrineList';
import {
    Route,
    useRouteMatch,
    Switch
  } from "react-router-dom";
import {UrineSwap} from './UrineSwap/UrineSwap';
import {AddUrine} from './AddUrine/AddUrine';

 export const UrineAnalyses: React.FC = () => {
    let { path, url } = useRouteMatch(); 
    return (
        <StyledContainer>
            <StyledListContainer>
               <h4>Badania moczu - lista wyników badań</h4>
               <UrineList />
            </StyledListContainer>
            <StyledUrineSwapContainer>
            <Switch>
              <Route exact path={path}>
                 <UrineSwap />
                   <StyledLink to={`${url}/addUrine`}>
                      <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                       </StyledButton>
                   </StyledLink>       
               </Route>
               <Route path={`${path}/addUrine`}>
                  <AddUrine />
               </Route>
            </Switch>                
            </StyledUrineSwapContainer>
        </StyledContainer>
    )
}