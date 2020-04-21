import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from './TaskTodo.module.css';

class TaskTodo extends React.Component {
    state= {
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
        isEmpty: false
    };

    onClickDone = id => {
        const newItemList = this.state.items.map( item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        this.setState({items: newItemList})
    };

    onClickDelete = id => {
        const newItemList = this.state.items.filter(item => item.id !== id);
        this.setState({items: newItemList, count: this.state.count -1})
    };

    onClickAdd = task => {
        if (task !== '') {
            this.setState(state => ({
                items: [
                    ...state.items,
                    {
                        task,
                        isDone: false,
                        id: state.count +1
                    }
                ],
                count: state.count +1,
                isEmpty: false
            }));
        } else {
            this.setState(state => ({isEmpty: true}))
        }
    };

    onClickSort = sorting => this.setState({ sortTask: sorting });

    render() {
        let sortingTasks;
        switch (this.state.sortTask) {
            case 'Завершенные':
                sortingTasks = this.state.items.filter(item => item.isDone);
                break;
            case 'Незавершенные':
                sortingTasks = this.state.items.filter(item => !item.isDone);
                break;
            case 'Все':
                sortingTasks = this.state.items;
                break;
            default :
                sortingTasks = this.state.items;
        }
        return (
            <div className={styles.container}>
                <div className={styles.footer}>
                    <Footer
                        items={this.state.items}
                        onClickSort={this.onClickSort}
                        sorting={this.state.sortTask}
                    />
                </div>
                <ItemList
                    items={this.state.items}
                    onClickDone={this.onClickDone}
                    onClickDelete={this.onClickDelete}
                />
                <InputItem onClickAdd={this.onClickAdd} isEmpty={this.state.isEmpty}/>
            </div>)
    }
}

export default TaskTodo;