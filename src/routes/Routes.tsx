import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RoutesConsts} from '../helpers/RoutesConsts'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path={RoutesConsts.HOME} component={} />
            <Route exact path={RoutesConsts.LOGIN} component={} />
            <Route exact path={RoutesConsts.REGISTRATION} component={} />
            <Route exact path={RoutesConsts.DASHBOARD} component={} />
        </Switch>
    );
};