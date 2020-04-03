import React from "react";
import Item from "../Item/Item";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "../App/App.module.css";
import PropTypes from "prop-types";

const ItemList = ({items, onClickDone, onClickDelete}) => (
    <ul>
        {items.map(item => <li key={item.id}>
            <Checkbox
                checked={item.isDone}
                onClick={() => onClickDone(item.id)}
            />
            <Item
                task={item.task}
                isDone={item.isDone}
                id={item.id}
            />
            <DeleteIcon
                className={styles.butdelete}
                onClick={() => onClickDelete(item.id)}
            />
        </li>)}

    </ul>
);

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
