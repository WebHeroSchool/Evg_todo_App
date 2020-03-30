import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

class App extends React.Component {
    state= {
        items : [
            { task: 'Приготовить завтрак!',
                isDone: true
            },
            { task: 'Продумать дизайн сайта',
                isDone: false
            },
            { task: 'Выполнить еще пару уроков по react!',
                isDone: true
            },
        ]
    };

    onClickDone = isDone => console.log (isDone);

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
                    <Footer count={3}/>
                </div>
            </div>
        )
    }
}

export default App;