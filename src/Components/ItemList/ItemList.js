import React from "react";
import Item from "../Item/Item";
import Checkbox from "@material-ui/core/Checkbox";
import styles from './ItemList.module.css';
import PropTypes from "prop-types";


class ItemList extends React.Component {

    render() {
        const {sort, onClickDone, onClickDelete} = this.props;
        return(
            <ul className={styles.task_list}>
                {sort.map(item => <li key={item.id} className={styles.task_list_item}>
                    <Checkbox
                        checked={item.isDone}
                        color='primary'
                        onClick={() => onClickDone(item.id)}
                    />
                    <Item
                        task={item.task}
                        isDone={item.isDone}
                        id={item.id}
                    />
                    <div
                        className={styles.but_edit}
                    />
                    <div
                        className={styles.but_delete}
                        onClick={() => onClickDelete(item.id)}
                    />
                </li>)}

            </ul>);
    }
}
    ItemList.propTypes = {
        items: PropTypes.oneOfType ([
            PropTypes.array.isRequired,
            PropTypes.object.isRequired,
            PropTypes.string.isRequired
        ]),
        onClickDone: PropTypes.func.isRequired,
        onClickDelete: PropTypes.func.isRequired
    };

export default ItemList;
