import {useHistory} from 'react-router';
import {RoutesConsts} from '../helpers/RoutesConsts';

export const useToMain = () => {
    const history = useHistory();

    const goToMain = () => {
        const location = {
            pathname: RoutesConsts.HOME,
        };
        history.push(location);
    };

    return {goToMain};
};

export const useToLogin = () => {
    const history = useHistory();

    const goToLogin = () => {
        const location = {
            pathname: RoutesConsts.LOGIN,
        };
        history.push(location);
    };

    return {goToLogin};
};
