import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from "prop-types";

class Item extends React.Component {
    state = {
        task: this.props.task
    };

   changeTask = e => {
       this.setState ({
           task: e.currentTarget.value
       });
    };

   render() {
       const {id, readOnly, isDone, isExist, onChangeItem} = this.props;
       const {task} = this.state;
       console.log("render");
       return(
           <input
               type='text'
               className={
                   classnames({
                       [styles.item]: true,
                       [styles.done]: isDone,
                       [styles.edit_mode]: !readOnly && !isDone
                   })}
               value={task}
               id={id}
               disabled={readOnly}
               onChange={this.changeTask}
           />);
   }
}

    Item.propTypes = {
        isDone: PropTypes.bool.isRequired,
        task: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
            PropTypes.symbol.isRequired
        ])
    };

export default Item;
