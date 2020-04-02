import React from 'react';
import styles from '../App/App.module.css';
import PropTypes from "prop-types";

const Footer = ({count}) => (
    <p> Осталось невыполненных задач:
        <span className={styles.count}> {count} </span> </p>
);

        Footer.propTypes = {
            count: PropTypes.number.isRequired
        };
export default Footer;