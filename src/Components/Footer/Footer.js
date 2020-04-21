import React from 'react';
import styles from './Footer.module.css';
import classnames from 'classnames';

const Footer = ({items, onClickSort, sortTask}) => {
    const allTasks = items.length;
    const completedTasks = items.filter(item => item.isDone).length;
    const uncompletedTasks = items.filter(item => !item.isDone).length;

    return(
        <div className={styles.footer_menu}>
            <button
                className={classnames({
                    [styles.button]: true,
                    [styles.selected]: sortTask === 'Завершенные'
                })}
                onClick={()=>onClickSort('Завершенные')
                }>
                    Завершённые
                <span className={styles.task_count}> {completedTasks} </span>
            </button>
            <button
                className={classnames({
                    [styles.button]: true,
                    [styles.selected]: sortTask === 'Незавершенные'
                })}
                onClick={()=> onClickSort('Незавершенные')
                }>
                Незавершённые
                <span className={styles.task_count}> {uncompletedTasks} </span>
            </button>
            <button
                onClick={()=> onClickSort('Все')
                }>
                Все
                <span className={styles.task_count}> {allTasks} </span>
            </button>
        </div>
    )
};

export default Footer;