import Image from 'next/image';
import styles from '../styles/StoreItem.module.scss';

function StoreItem({ displayName, displayIcon, streamedVideo }) {
    return (
        <div className={styles.item}>
            <article>
                <div className={styles.imageContainer}>
                    <Image
                        src={displayIcon}
                        layout='fill'
                        className={styles.image}
                        alt='cool store item'
                    />
                </div>
                <h3>{displayName}</h3>
                {streamedVideo && (
                    <a
                        target='_blank'
                        href={streamedVideo}
                        rel='noopener noreferrer'
                    >
                        Video
                    </a>
                )}
            </article>
        </div>
    );
}

export default StoreItem;
