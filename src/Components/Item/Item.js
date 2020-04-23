import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from "prop-types";

class Item extends React.Component {
    render() {

        const {task, isDone} = this.props;
        return(
            <span className={
                classnames({
                    [styles.item]: true,
                    [styles.done]: isDone
                })}>
                    {task}
            </span>);
    }
}

    Item.propTypes = {
        isDone: PropTypes.bool.isRequired,
        task: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
            PropTypes.symbol.isRequired
        ])
    };

export default Item;