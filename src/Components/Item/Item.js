import React from 'react';
import classnames from 'classnames';
import styles from "../App/App.module.css";
import PropTypes from "prop-types";

class Item extends React.Component {
    componentDidMount() {
        this.timerID = setInterval(() =>
        console.log(`(Item)Добавлена задача: "${this.props.task}"`), 1000);
    }

    componentDidUpdate() {
        console.log('(Item) Компонент обновился!');
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('(Item)Компонент был удален!');
    }

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