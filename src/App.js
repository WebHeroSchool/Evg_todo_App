import React from 'react';

const ItemList = () => (
    <ul style={{fontSize: 30}}>
        <li> 1. </li>
        <li> 2. </li>
        <li> 3. </li>
    </ul>
);
const elem = (
    <h1 style={{
      color: 'burlywood',
      fontSize: 50,
      textAlign: 'center'
    }}>
      ToDo_App by <strong> Evgeny Morozov! </strong>
    </h1>
);

const App = () => (
    <div>
        {elem}
        <ItemList />
    </div>
);

export default App;