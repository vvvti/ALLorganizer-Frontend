import React from 'react';
import {
    StyledContainer,
    StyledListContainer,
    StyledBiochemistrySwapContainer,
    StyledButton,
    StyledLink
} from './Biochemistry.styled';
import {BiochemistryList} from './BiochemistryList/BiochemistryList';
import {
    Route,
    useRouteMatch,
    Switch
  } from "react-router-dom";
  import {BiochemistrySwap} from './BiochemistrySwap/BiochemistrySwap';
  import {AddBiochemistry} from './AddBiochemistry/AddBiochemistry';

 export const Biochemistry: React.FC = () => {
    let { path, url } = useRouteMatch();
    return (
        <StyledContainer>
            <StyledListContainer>
               <h4>Biochemia - lista wyników badań</h4>
               <BiochemistryList />
            </StyledListContainer>
            <StyledBiochemistrySwapContainer>
            <Switch>
              <Route exact path={path}>
                 <BiochemistrySwap />
                   <StyledLink to={`${url}/addBiochemistry`}>
                      <StyledButton
                        size="small"
                        variant="contained"
                        color="primary">
                            Dodaj wyniki badań
                       </StyledButton>
                   </StyledLink>       
               </Route>
               <Route path={`${path}/addBiochemistry`}>
                  <AddBiochemistry />
               </Route>
            </Switch>        
            </StyledBiochemistrySwapContainer>
        </StyledContainer>
    )
}