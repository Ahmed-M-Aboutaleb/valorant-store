import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';

import styles from '../styles/CodeForm.module.scss';

function CodeForm(props: {
    cookies: any;
    setPopup: Function;
    dispatch: Function;
}) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    const [code5, setCode5] = useState('');
    const [code6, setCode6] = useState('');

    const login = (e) => {
        e.preventDefault();
        const apiEndPoint = process.env.NEXT_PUBLIC_API;
        if (code1 && code2 && code3 && code4 && code5 && code6) {
            setLoading(true);
            const code =
                code1.toString() +
                code2.toString() +
                code3.toString() +
                code4.toString() +
                code5.toString() +
                code6.toString();
            axios
                .post(`${apiEndPoint}/login/multifactor`, {
                    code: code,
                    cookies: props.cookies,
                })
                .then((response) => {
                    setLoading(false);
                    if (response.data.success) {
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
                            error.response.status === 424 ||
                            error.response.status === 500
                        )
                            toast.error(
                                'Do you know that you typed wrong code 🤔'
                            );
                        setTimeout(() => {
                            props.setPopup(false);
                        }, 1000);
                        setLoading(false);
                    } else if (error.request) {
                        toast.error("Error - We can't make the request");
                        setLoading(false);
                    } else {
                        toast.error("Oh no.. I can't know the error 😞");
                        setLoading(false);
                    }
                });
        }
    };

    const handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split('-');
        if (value.length >= maxLength) {
            if (parseInt(fieldIndex, 10) <= 6) {
                const nextSibling = document.querySelector(
                    `input[name=code-${parseInt(fieldIndex, 10) + 1}]`
                );
                if (nextSibling !== null) {
                    if (name == 'code-1') {
                        setCode1(value);
                    } else if (name == 'code-2') {
                        setCode2(value);
                    } else if (name == 'code-3') {
                        setCode3(value);
                    } else if (name == 'code-4') {
                        setCode4(value);
                    } else if (name == 'code-5') {
                        setCode5(value);
                    }
                    // @ts-ignore
                    nextSibling.focus();
                } else {
                    setCode6(value);
                }
            }
        } else {
            if (name == 'code-1') {
                setCode1(value);
            } else if (name == 'code-2') {
                setCode2(value);
            } else if (name == 'code-3') {
                setCode3(value);
            } else if (name == 'code-4') {
                setCode4(value);
            } else if (name == 'code-5') {
                setCode5(value);
            } else if (name == 'code-6') {
                setCode6(value);
            }
        }
    };

    return (
        <>
            <form className={styles.form} onSubmit={login}>
                <div className={styles.formGroup}>
                    <input
                        onChange={(e) => handleChange(e)}
                        name='code-1'
                        value={code1}
                        type='tel'
                        maxLength={1}
                        pattern='[\d]*'
                        tabIndex={1}
                        placeholder='·'
                        autoComplete='off'
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        name='code-2'
                        value={code2}
                        type='tel'
                        maxLength={1}
                        pattern='[\d]*'
                        tabIndex={1}
                        placeholder='·'
                        autoComplete='off'
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        value={code3}
                        name='code-3'
                        type='tel'
                        maxLength={1}
                        pattern='[\d]*'
                        tabIndex={1}
                        placeholder='·'
                        autoComplete='off'
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        name='code-4'
                        value={code4}
                        type='tel'
                        maxLength={1}
                        pattern='[\d]*'
                        tabIndex={1}
                        placeholder='·'
                        autoComplete='off'
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        name='code-5'
                        value={code5}
                        type='tel'
                        maxLength={1}
                        pattern='[\d]*'
                        tabIndex={1}
                        placeholder='·'
                        autoComplete='off'
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        name='code-6'
                        value={code6}
                        type='tel'
                        maxLength={1}
                        pattern='[\d]*'
                        tabIndex={1}
                        placeholder='·'
                        autoComplete='off'
                    />
                </div>
                <button type='submit' disabled={loading}>
                    Login
                </button>
            </form>
        </>
    );
}

export default CodeForm;
