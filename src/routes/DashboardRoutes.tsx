import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RoutesConsts} from '../helpers/RoutesConsts';
import {DashboardGrid} from '../components/DaschboardGrid/DashboardGrid';
import {NotFoundPage} from '../components/pages/NotFoundPage/NotFoundPage';
import {Analyses} from '../components/pages/Analyses/Analyses';

export const DaschboardRoutes:React.FC = () => {
    return (
        <Switch>
            <Route exact path={RoutesConsts.DASHBOARD} component={DashboardGrid} />
            
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};