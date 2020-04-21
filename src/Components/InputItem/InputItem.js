import React from 'react';
import styles from './Input.module.css';
import PropTypes from "prop-types";

class InputItem extends React.Component {
    state = {
            inputValue: ''
    };

    onIconClick = () => {
        this.setState({
            inputValue: ''
        });

            this.props.onClickAdd(this.state.inputValue);
    };

    render() {
        return (
            <form className={styles.tasks}>
                { this.props.isEmpty ? (
                    <input
                        className={styles.input_empty}
                        value={this.state.inputValue}
                        onChange={event => this.setState({inputValue: event.target.value})}
                    />
                ) : (
                    <input
                        type='text'
                        placeholder="Введите новую задачу"
                        className={styles.input}
                        value={this.state.inputValue}
                        onChange={event => this.setState({inputValue: event.target.value})}
                    />
                )
             }
                <div className={styles.addbutton} onClick={this.onIconClick}> </div>
            </form>);
    }
}

    InputItem.propTypes = {
        onClickAdd: PropTypes.func.isRequired,
        isValid: PropTypes.bool.isRequired
    };

export default InputItem;
