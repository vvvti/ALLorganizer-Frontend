import {useCallback, useState} from 'react';
import {RegisterFormValues} from '../helpers/types';
import {postRegisterValues} from '../api/registerApi';
import {useToMain} from './useToPage';
import {useAuthContext} from '../../src/context/authContext';

export const useRegister = () => {
    const [registerValues, setRegisterValues] = useState();
    const [registerError, setRegisterError] = useState('');
    const {goToMain} = useToMain();
    const {setLoggedIn} = useAuthContext();

    const postRegister = useCallback(
        async (values: RegisterFormValues) => {
            try {
                const response = await postRegisterValues(values);
                setRegisterValues(response.data);
                localStorage.setItem('isLoggedIn', 'true');
                setLoggedIn(true);
                goToMain();
            } catch {
                setRegisterError('Please insert another username and email address');
            }
        },
        [goToMain, setLoggedIn],
    );

    return {
        registerValues,
        postRegister,
        registerError,
    };
};
