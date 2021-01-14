import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RoutesConsts} from '../helpers/RoutesConsts';
import {Home} from '../components/pages/Home/Home';
import {Login} from '../components/pages/Login/Login';
import {Registration} from '../components/pages/Registration/Registration';
import {Dashboard} from '../components/pages/Dashboard/Dashboard';
import {UserProfile} from '../components/pages/UserProfile/UserProfile';
import {NotFoundPage} from '../components/pages/NotFoundPage/NotFoundPage';


export const Routes:React.FC = () => {
    return (
        <Switch>
            <Route exact path={RoutesConsts.HOME} component={Home} />
            <Route exact path={RoutesConsts.LOGIN} component={Login} />
            <Route exact path={RoutesConsts.REGISTRATION} component={Registration} />
            <Route exact path={RoutesConsts.DASHBOARD} component={Dashboard} />
            <Route exact path={RoutesConsts.USERPROFILE} component={UserProfile} />
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};