import dynamic from 'next/dynamic';
import { useState } from 'react';

import LoginForm from '../components/LoginForm';

import styles from '../styles/Home.module.scss';

export default function Home({ dispatch }) {
    const [popup, setPopup] = useState(false);
    const [cookies, setCookies] = useState('');
    const CodeForm = dynamic(() => import('../components/CodeForm'));

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <header>
                    <h1>WELCOME BACK 👋</h1>
                    <h2>Get Ready For Some Cool Stuff !</h2>
                </header>
                <div className={styles.card}>
                    {popup ? (
                        <CodeForm
                            dispatch={dispatch}
                            setPopup={setPopup}
                            cookies={cookies}
                        />
                    ) : (
                        <>
                            <LoginForm
                                dispatch={dispatch}
                                setPopup={setPopup}
                                setCookies={setCookies}
                            />
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
