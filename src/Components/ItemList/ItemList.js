import React from "react";
import Item from "../Item/Item";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "../App/App.module.css";

const ItemList = ({items}) => (
    <ul>
        {items.map(item => <li key={item.task}>
            <Checkbox />
            <Item task={item.task} isDone={item.isDone}/>
            <DeleteIcon className={styles.butdelete} />
        </li>)}

    </ul>
);

export default ItemList;
