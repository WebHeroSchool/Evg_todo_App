import React from "react";
import Item from "../Item/Item";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "../App/App.module.css";

const deltask = () => alert('Deleted!');
const ItemList = ({items, onClickDone}) => (
    <ul>
        {items.map(item => <li key={item.task}>
            <Checkbox
                checked={item.isDone}
              onClick={() => onClickDone(item.id)}
            />
            <Item
                task={item.task}
                isDone={item.isDone}
                id={item.id}
            />
            <DeleteIcon className={styles.butdelete} onClick={deltask}/>
        </li>)}

    </ul>
);

export default ItemList;
