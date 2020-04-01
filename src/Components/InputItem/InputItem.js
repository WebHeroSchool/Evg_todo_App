import React from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import styles from '../App/App.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class ItemInput extends React.Component {
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
                { this.props.isValid ? (
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Заполните поле"
                        defaultValue="Введите задачу"
                        helperText="Поле не может быть пустым"
                        value={this.state.inputValue}
                        onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
                    />
                ) : (
                    <Input
                        placeholder="Введите новую задачу"
                        inputProps={{ 'aria-label': 'description' }}
                        value={this.state.inputValue}
                        onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
                    />
                )
             }
                <AddCircleOutlineIcon
                    className={styles.addbutton}
                    onClick={this.onIconClick}/>
            </form>);
    }
}

export default ItemInput;