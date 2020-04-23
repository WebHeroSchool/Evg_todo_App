import React, {useState, useEffect} from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from './TaskTodo.module.css';

const TaskTodo = () => {
   const initialState = {
        items : [
            { task: 'Приготовить завтрак!',
                isDone: true,
                id: 1
            },
            { task: 'Продумать дизайн сайта',
                isDone: false,
                id: 2
            },
        ],
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
   const [sortTask, setSort] = useState(initialState.sortTask);

    useEffect(() => {
        console.log('Component "items" is mounted!');
    }, [count]);

   useEffect(() => {
       console.log(' Item is updated');
   });

    const onClickDone = id => {
        const newItemList = items.map( item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        setItems(newItemList)
    };

    const onClickDelete = id => {
        const newItemList = items.filter(item => item.id !== id);
        setItems(newItemList);
        setCount((count) => count - 1)
    };

    const onClickAdd = task => {
        if (task !== '' && !items.some(item => item.task === task)) {
            const newItems = [
                ...items,
                {
                    task,
                    isDone: false,
                    id: count +1
                }
            ];
            setItems(newItems);
            setCount((count) => count + 1);
            setEmpty(false);
            setExist(false)
        } else {
            setEmpty(true);
            setExist(true);
        }
    };

   const onClickEdit = taskedit => {};
   const onClickSort = sorting => setSort(sorting);

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
                    sort={sortingTasks}
                    sortValue={sortTask}
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete}
                />
                </div>
                <InputItem onClickAdd={onClickAdd} isEmpty={isEmpty} isExist={isExist}/>

            </div>)
    };

export default TaskTodo;