import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import styles from '../styles/Home.module.scss';
import Script from 'next/script';

export default function Home() {
    interface formValues {
        username: string;
        password: string;
    }

    const apiEndPoint = process.env.NEXT_PUBLIC_API;

    const schema = Yup.object().shape({
        username: Yup.string().required('Enter your username'),
        password: Yup.string().required('Enter your password'),
    });

    const login = (values: formValues) => {
        axios
            .post(`${apiEndPoint}/login`, {
                username: values.username,
                password: values.password,
            })
            .then()
            .catch(function (error) {
                if (error.response) {
                    if (
                        error.response.status === 401 ||
                        error.response.status === 424
                    )
                        toast.error(
                            'Do you know that you typed wrong username/password 🤔'
                        );
                    if (error.response.status === 500)
                        toast.error('Error - Internal Server Error');
                } else if (error.request) {
                    toast.error("Error - We can't make the request");
                } else {
                    toast.error("Oh no.. I can't know the error 😞");
                }
            });
    };
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <header>
                    <h1>WELCOME BACK 👋</h1>
                    <h2>Get Ready For Some Cool Stuff !</h2>
                </header>
                <div className={styles.card}>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            region: 'EU',
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
                                    <p className={styles.error}>
                                        ❌ {errors.username}
                                    </p>
                                ) : errors.password ? (
                                    <p className={styles.error}>
                                        ❌ {errors.password}
                                    </p>
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
                                            value='EU'
                                            id='EU'
                                        />
                                        <label
                                            className={styles['radio-label']}
                                            htmlFor='EU'
                                        >
                                            EU
                                        </label>
                                    </div>

                                    <div className={styles.radio}>
                                        <Field
                                            type='radio'
                                            name='region'
                                            value='KR'
                                            id='KR'
                                        />
                                        <label
                                            className={styles['radio-label']}
                                            htmlFor='KR'
                                        >
                                            KR
                                        </label>
                                    </div>
                                    <div className={styles.radio}>
                                        <Field
                                            type='radio'
                                            name='region'
                                            value='AP'
                                            id='AP'
                                        />
                                        <label
                                            className={styles['radio-label']}
                                            htmlFor='AP'
                                        >
                                            AP
                                        </label>
                                    </div>
                                    <div className={styles.radio}>
                                        <Field
                                            type='radio'
                                            name='region'
                                            value='NA'
                                            id='NA'
                                        />
                                        <label
                                            className={styles['radio-label']}
                                            htmlFor='NA'
                                        >
                                            NA
                                        </label>
                                    </div>
                                </div>
                                <button type='submit'>Login</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </main>
        </div>
    );
}
