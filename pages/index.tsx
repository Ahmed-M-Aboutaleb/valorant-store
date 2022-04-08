import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import styles from '../styles/Home.module.scss';

export default function Home() {
    const schema = Yup.object().shape({
        username: Yup.string().required('Enter your username'),
        password: Yup.string().required('Enter your password'),
    });
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
                        }}
                        validationSchema={schema}
                        onSubmit={() => {}}
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
                                <button type='submit'>Login</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </main>
        </div>
    );
}
