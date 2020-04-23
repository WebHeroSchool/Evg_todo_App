import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import TaskTodo from '../TaskTodo/TaskTodo';
import About from "../About/About";
import styles from './App.module.css';
import Header from "../Header/Header";

const App = () =>
    (<Router>
            <div className={styles.box}>
                <Header/>
                <nav>
                        <Link to='/' className={styles.link}> Обо мне </Link>
                        <Link to = '/taskTodo' className={styles.link}> Список Дел </Link>
                </nav>
                <div>
                    <Route path = '/' exact component={About}/>
                    <Route path ='/taskTodo' component ={TaskTodo}/>
                </div>
            </div>
        </Router>);

export default App;