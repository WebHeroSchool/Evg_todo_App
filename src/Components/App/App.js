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
const todoItem = ['Съездить на работу', 'Продумать дизайн сайта', 'Выполнить еще пару уроков по react!'];

const App = () => (
    <div>
        <h1 style={{
            color: 'chocolate',
            fontSize: 43,
            textAlign: 'center'
        }}> <span> Todos app </span> </h1>
        {elem}
        <InputItem/>
        <ItemList todoItem={todoItem}/>
        <Footer count={3}/>
    </div>
);

export default App;