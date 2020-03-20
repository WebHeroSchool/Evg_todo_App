import React from "react";
import Item from "../Item/Item";

const ItemList = ({items}) => (
    <ul style={{fontSize: 20, color: 'red'}}>
        {items.map(item => <li key={item.task}> <Item task={item.task}/> </li>)}
    </ul>
);

export default ItemList;
