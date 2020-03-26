import React from 'react';
import styles from '../App/App.module.css';
const Footer = ({count}) => (
    <p> Осталось невыполненных задач:
        <span className={styles.count}> {count} </span> </p>


);
export default Footer;