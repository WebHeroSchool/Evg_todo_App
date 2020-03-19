import React from "react";
import Item from "../Item/Item";

const ItemList = ({todoItem}) => (
    <ul style={{fontSize: 20, color: 'red'}}>
        <li> <Item todoItem={todoItem[0]}/> </li>
        <li> <Item todoItem={todoItem[1]}/> </li>
        <li> <Item todoItem={todoItem[2]}/> </li>
    </ul>
);

export default ItemList;
