import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import './App.css';

const items = [
    {task: 'Съездить на работу'},
    { task: 'Продумать дизайн сайта'},
    {task: 'Выполнить еще пару уроков по react!'}
    ];

const App = () => (
    <div className="container">
        <h1 className="container__title"> <span> Todos app </span> </h1>
        <div className="container__subtitle">
            created by <strong> Evgeny Morozov! </strong>
        </div>
            <div className="input-task">
                <InputItem/>
            </div>
                <div className="task-list">
                    <ItemList items={items} />
                </div>
                    <div className="footer">
                        <Footer count={3}/>
                    </div>
    </div>
);

export default App;