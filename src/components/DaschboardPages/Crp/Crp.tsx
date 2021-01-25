import React from 'react';
import {
    StyledContainer,
    StyledListContainer,
    StyledCrpSwapContainer,
    StyledButton,
    StyledLink,
} from './Crp.styled';
import {CrpList} from './CrpList/CrpList';
import {
    Route,
    useRouteMatch,
    Switch
  } from "react-router-dom";
  import {CrpSwap} from './CrpSwap/CrpSwap';
  import {AddCrp} from './AddCrp/AddCrp';

 export const Crp: React.FC = () => {
    let { path, url } = useRouteMatch(); 
    return (
        <StyledContainer>
            <StyledListContainer>
               <h4>Białko C-reaktywne (CRP) - lista wyników badań</h4>
               <CrpList />
            </StyledListContainer>
            <StyledCrpSwapContainer>
            <Switch>
              <Route exact path={path}>
                 <CrpSwap />
                   <StyledLink to={`${url}/addCrp`}>
                      <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                       </StyledButton>
                   </StyledLink>       
               </Route>
               <Route path={`${path}/addCrp`}>
                  <AddCrp />
               </Route>
            </Switch>                
            </StyledCrpSwapContainer>
        </StyledContainer>
    )
}