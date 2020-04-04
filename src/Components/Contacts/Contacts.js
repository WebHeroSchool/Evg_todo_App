import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => (
    <div className={styles.boxContact}>
        <h2> Для связи со мной: </h2>
        <list>
            <p> e-mail: xxx@mail.ru </p>
            <p> тел.: 8(xxx)xxx-xx-xx </p>
            <p> Instagram: - </p>
        </list>
    </div>
);

export default Contacts;