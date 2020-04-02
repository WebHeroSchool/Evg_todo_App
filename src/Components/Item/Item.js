import React from 'react';
import classnames from 'classnames';
import styles from "../App/App.module.css";
import PropTypes from "prop-types";


const Item = ({task, isDone}) => (
    <span className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone
        })}>
        {task}
    </span>
);

    Item.propTypes = {
        isDone: PropTypes.bool.isRequired,
        task: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
            PropTypes.symbol.isRequired
        ])
    };

export default Item;