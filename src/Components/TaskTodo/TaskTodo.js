import React, {useState} from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from './TaskTodo.module.css';

const TaskTodo = () => {
   const initialState = {
        items :
            JSON.parse(localStorage.getItem('editedList') ||
            '[{"task": "Задача №1", "isDone": true, "id": 1, "readOnly":true}, {"task": "Обязательно нужно что-то сделать!", "isDone": false, "id": 2, "readOnly": true}]'
            ),
        count: 2,
        sortTask: 'Все',
        isEmpty: false,
        isExist: false,
        isEdited: false
    };

   const [items, setItems] = useState(initialState.items);
   const [count, setCount] = useState(initialState.count);
   const [isEmpty, setEmpty] = useState(initialState.isEmpty);
   const [isExist, setExist] = useState(initialState.isExist);
   const [isEdited, setEdited] = useState(initialState.isEdited);
   const [sortTask, setSort] = useState(initialState.sortTask);
   const [readOnly, setReadOnly] = useState(initialState.readOnly);

    const onClickDone = id => {
        if (!isEdited) {
        const newItemList = items.map( item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        setItems(newItemList)
    }
   };
    const onClickDelete = id => {
        const newItemList = items.filter(item => item.id !== id);
        setItems(newItemList);
        setCount(count - 1);
    };

    const onClickAdd = task => {
        if (task !== '' && !items.some(item => item.task === task)) {
            const id = items.length > 0?
                items[items.length-1].id+1: 0;
            const newItems = [
                ...items,
                {
                    task,
                    isDone: false,
                    id: id,
                    readOnly: true
                }
            ];
            setItems(newItems);
            setCount(count + 1);
            setEmpty(false);
            setExist(false)
        } else {
            setEmpty(task === '');
            setExist(task !== '');
        }
    };

   const onClickEdit = (id, isDone) => {
       if(!isDone) {
           const newItemList = items.map( item => {
               if (item.id === id) {
                   item.readOnly = !item.readOnly;
               }
               return item;
           });
           setItems(newItemList);
           setEdited(true);
       }
   };

   const onChangeItem = (id, newValue) => {
       const newItemList = items.map(item => {
           const newItem = {...item};
           if (item.id === id) {
               newItem.task = newValue.currentTarget.value;
           }
           return newItem;
       });
       setTimeout(() => {
           setItems(newItemList);
           setEdited(false);
           setReadOnly(true);
       }, 200);
   };

   const onClickSort = sorting => setSort(sorting);

   let addToLocal = JSON.stringify(items);
   localStorage.setItem('editedList', addToLocal);

        let sortingTasks;
        switch (sortTask) {
            case 'Завершенные':
                sortingTasks = items.filter(item => item.isDone);
                break;
            case 'Незавершенные':
                sortingTasks = items.filter(item => !item.isDone);
                break;
            case 'Все':
                sortingTasks = items;
                break;
            default :
                sortingTasks = items;
        }
        return (
            <div className={styles.container}>
                <div className={styles.footer}>
                    <Footer
                        items={items}
                        onClickSort={onClickSort}
                        sorting={sortTask}
                    />
                </div>
                <div className={styles.tasks_item_list}>
                <ItemList
                    task = {items.task}
                    readOnly = {readOnly}
                    sort={sortingTasks}
                    sortValue={sortTask}
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete}
                    onClickEdit = {onClickEdit}
                    onChangeItem = {onChangeItem}
                />
                </div>
                <InputItem onClickAdd={onClickAdd} isEmpty={isEmpty} isExist={isExist}/>

            </div>)
    };

export default TaskTodo;