import React from 'react';

const Footer = ({count}) => <p style={{fontSize: 18}}> Осталось невыполненных задач: <strong style={{color: 'red'}}> {count} </strong> </p>;

    export default Footer;