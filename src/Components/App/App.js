import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import TaskTodo from '../TaskTodo/TaskTodo';
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import styles from './App.module.css';
import Header from "../Header/Header";

const App = () =>
    (<Router>
            <div className={styles.box}>
                <Header/>
                <nav>
                    <ul>
                        <Link to='/' className={styles.link}><li> Обо мне </li></Link>
                        <Link to = '/taskTodo' className={styles.link}><li> Список Дел </li></Link>
                        <Link to = '/contacts' className={styles.link}><li> Контакты </li></Link>
                    </ul>
                </nav>
                <div className={styles.content}>
                    <Route path = '/' exact component={About}/>
                    <Route path ='/taskTodo' component ={TaskTodo}/>
                    <Route path = '/contacts' component = {Contacts}/>
                </div>
            </div>
        </Router>);

export default App;