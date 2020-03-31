import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

class App extends React.Component {
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
            { task: 'Выполнить еще пару уроков по react!',
                isDone: true,
                id: 3
            },
        ],
        count: 6
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

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}> <span> Todos app </span> </h1>
                <div className={styles.subtitle}>
                    created by <strong> Evgeny Morozov! </strong>
                </div>
                <InputItem/>
                <ItemList items={this.state.items} onClickDone={this.onClickDone} />

                <div className={styles.footer}>
                    <Footer count={this.state.count} />
                </div>
            </div>
        )
    }
}

export default App;