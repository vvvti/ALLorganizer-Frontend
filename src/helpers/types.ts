import {RouteComponentProps} from 'react-router-dom';
export interface LoginFormValues {
    email: string;
    password: string;
}

export interface RegisterFormValues {
    email: string;
    username: string;
    password: string;
}

export interface UserValues {
    email: string;
    id: string;
    username: string;
}

export interface AuthRouteProps {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
}