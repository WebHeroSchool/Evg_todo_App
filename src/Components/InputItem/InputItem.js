import React from 'react';
import ValidationTextField from '@material-ui/core/TextField';

const ItemInput = () => (
    <form>
        <ValidationTextField
            label="Введите новую задачу:"
            variant="outlined"
            id="validation-outlined-input"
        />
    </form>

);

export default ItemInput;