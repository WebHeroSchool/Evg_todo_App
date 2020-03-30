import React from 'react';
import Input from '@material-ui/core/Input';
import styles from '../App/App.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import items from '../App/App'

const event = () => alert('Added!');

const ItemInput = () => (
    <form className={styles.tasks}>
        <Input
               placeholder="Введите новую задачу"
               inputProps={{ 'aria-label': 'description' }}
        />
        <AddCircleOutlineIcon className={styles.addbutton} onClick={event}/>
    </form>
);
export default ItemInput;