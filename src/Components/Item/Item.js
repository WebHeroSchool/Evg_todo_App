import React from 'react';
import classnames from 'classnames';
import styles from '../App/App.module.css';

const Item = ({task, isDone}) => (
    <span className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone
        })
    }> {task} </span>
);

export default Item;