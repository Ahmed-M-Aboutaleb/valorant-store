import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import StoreItem from '../components/StoreItem';
import { UserContext } from '../context/context';
import styles from '../styles/Store.module.scss';

function Store() {
    const apiEndPoint = process.env.NEXT_PUBLIC_API;
    const [skins, setSkins] = useState([]);
    const user = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        axios
            .post(`${apiEndPoint}/store`, user)
            .then((response) => {
                if (response.status === 200) {
                    setSkins(response.data.skins);
                } else {
                    router.push('/');
                }
            })
            .catch((err) => {
                router.push('/');
            });
    }, []);
    return (
        <main className={styles.container}>
            {skins.map((skin, index) => (
                <StoreItem
                    key={index}
                    displayName={skin.displayName}
                    displayIcon={skin.displayIcon}
                    streamedVideo={skin.streamedVideo}
                />
            ))}
        </main>
    );
}

export default Store;
