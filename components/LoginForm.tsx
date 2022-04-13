import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

import styles from '../styles/LoginForm.module.scss';

function LoginForm(props: {
    setPopup: Function;
    setCookies: Function;
    dispatch: Function;
}) {
    interface formValues {
        username: string;
        password: string;
        region: string;
    }

    const apiEndPoint = process.env.NEXT_PUBLIC_API;

    const schema = Yup.object().shape({
        username: Yup.string().required('Enter your username'),
        password: Yup.string().required('Enter your password'),
    });

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const login = (values: formValues) => {
        setLoading(true);
        props.dispatch({ type: 'setRegion', region: values.region });
        axios
            .post(`${apiEndPoint}/login`, {
                username: values.username,
                password: values.password,
            })
            .then((response) => {
                if (response.data.message == 'Please Enter the 2FA') {
                    props.setPopup(true);
                    props.setCookies(response.data.cookies);
                    setLoading(false);
                } else if (response.status === 200) {
                    props.dispatch({
                        type: 'setUser',
                        id: response.data.payload.id,
                        accessToken: response.data.payload.access_token,
                        entitlementToken:
                            response.data.payload.entitlement_token,
                    });
                    toast.success('Welcome Back Bro 🤜🤛');
                    router.push('/store');
                    setLoading(false);
                } else {
                    toast.error('Error - Internal Server Error');
                    setLoading(false);
                }
            })
            .catch(function (error) {
                if (error.response) {
                    if (
                        error.response.status === 401 ||
                        error.response.status === 424
                    )
                        toast.error(
                            'Do you know that you typed wrong username/password 🤔'
                        );
                    setLoading(false);
                    if (error.response.status === 500)
                        toast.error('Error - Internal Server Error');
                    setLoading(false);
                } else if (error.request) {
                    toast.error("Error - We can't make the request");
                    setLoading(false);
                } else {
                    toast.error("Oh no.. I can't know the error 😞");
                    setLoading(false);
                }
            });
    };
    return (
        <div className={styles.div}>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    region: 'eu',
                }}
                validationSchema={schema}
                onSubmit={login}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={styles.input}>
                            <Field
                                name='username'
                                id='username'
                                type='text'
                                placeholder='username'
                            />
                        </div>
                        <div className={styles.input}>
                            <Field
                                name='password'
                                type='password'
                                placeholder='password'
                                id='password'
                            />
                        </div>

                        {errors.username ? (
                            <p className={styles.error}>❌ {errors.username}</p>
                        ) : errors.password ? (
                            <p className={styles.error}>❌ {errors.password}</p>
                        ) : (
                            ''
                        )}
                        <div
                            className={styles.group}
                            role='group'
                            aria-labelledby='my-radio-group'
                        >
                            <div className={styles.radio}>
                                <Field
                                    type='radio'
                                    name='region'
                                    value='eu'
                                    id='eu'
                                />
                                <label
                                    className={styles['radio-label']}
                                    htmlFor='eu'
                                >
                                    EU
                                </label>
                            </div>

                            <div className={styles.radio}>
                                <Field
                                    type='radio'
                                    name='region'
                                    value='kr'
                                    id='kr'
                                />
                                <label
                                    className={styles['radio-label']}
                                    htmlFor='kr'
                                >
                                    KR
                                </label>
                            </div>
                            <div className={styles.radio}>
                                <Field
                                    type='radio'
                                    name='region'
                                    value='ap'
                                    id='ap'
                                />
                                <label
                                    className={styles['radio-label']}
                                    htmlFor='ap'
                                >
                                    AP
                                </label>
                            </div>
                            <div className={styles.radio}>
                                <Field
                                    type='radio'
                                    name='region'
                                    value='na'
                                    id='na'
                                />
                                <label
                                    className={styles['radio-label']}
                                    htmlFor='na'
                                >
                                    NA
                                </label>
                            </div>
                        </div>
                        <button type='submit' disabled={loading}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;
