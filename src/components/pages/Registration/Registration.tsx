import React, {useCallback} from 'react';
import { useForm } from 'react-hook-form';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ErrorMessage, StyledAvatar, StyledButton, StyledForm, StyledLoginPage, StyledPaper} from './Registration.styled';
import {Field, Formik} from 'formik';
import {InputField} from '../../../components/InputField/InputField';
import {INITIAL_REGISTER_VALUES} from '../../../helpers/constants';
import {validationSchema} from './Registration.helpers';
import {RoutesConsts} from '../../../helpers/RoutesConsts';
import {RegisterFormValues} from '../../../helpers/types';



export const Registration: React.FC = () => {

 const { register, handleSubmit } = useForm<RegisterFormValues>();
  const onSubmit = useCallback((formValues: RegisterFormValues) => {
    console.log(formValues);
  }, []);
    return (
        <>
            <Formik<RegisterFormValues>
                initialValues={INITIAL_REGISTER_VALUES}
                validationSchema={validationSchema}
                onSubmit={async (values:RegisterFormValues) => {
                     await handleSubmit(onSubmit) }}
            >
                {({isValid, errors, handleBlur, touched}) => (
                    <Container component="main" maxWidth="xs">
                        <StyledPaper>
                            <StyledAvatar color="primary">
                                <LockOutlinedIcon />
                            </StyledAvatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                                <StyledForm>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            ariaLabel="User name"
                                            label="User Name"
                                            name="username"
                                            component={InputField}
                                            prefix=""
                                            onBlur={handleBlur}
                                            ref={register}
                                        />
                                        <ErrorMessage>{touched.username && errors.username}</ErrorMessage>                                    
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            ariaLabel="Email"
                                            label="Email Address"
                                            name="email"
                                            component={InputField}
                                            prefix=""
                                            onBlur={handleBlur}
                                            ref={register}
                                        />
                                        <ErrorMessage>{touched.email && errors.email}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            ariaLabel="Password"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            component={InputField}
                                            onBlur={handleBlur}
                                            prefix=""
                                            ref={register}
                                        />
                                        <ErrorMessage>{touched.password && errors.password}</ErrorMessage>
                                    </Grid>
                                </Grid>
                                <StyledButton type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
                                    Register
                                </StyledButton>
                            </StyledForm>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <StyledLoginPage to={RoutesConsts.LOGIN}>Already have an account? Sign in</StyledLoginPage>
                                </Grid>
                            </Grid>
                            {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                        </StyledPaper>
                    </Container>
                )}
            </Formik>
        </>
    );
};
