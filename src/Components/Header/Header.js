import React from 'react';
import styles from './Header.module.css';

const Header = () => (
    <div className={styles.Header}>
        <h1 className={styles.title}> <span> Todos app </span> </h1>
        <div className={styles.subtitle}>
            created by <strong> Evgeny Morozov! </strong>
        </div>
    </div>
);

export default Header;