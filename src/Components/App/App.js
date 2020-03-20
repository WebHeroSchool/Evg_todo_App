import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

const elem = (
    <p1 style={{
        color: 'burlywood',
        fontSize: 20,
    }}>
        created by <strong> Evgeny Morozov! </strong>
    </p1>
);
const items = [
    {task: 'Съездить на работу'},
    { task: 'Продумать дизайн сайта'},
    {task: 'Выполнить еще пару уроков по react!'}
    ];

const App = () => (
    <div>
        <h1 style={{
            color: 'chocolate',
            fontSize: 43,
            textAlign: 'center'
        }}> <span> Todos app </span> </h1>
        {elem}
        <InputItem/>
        <ItemList items={items}/>
        <Footer count={3}/>
    </div>
);

export default App;