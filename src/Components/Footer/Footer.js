import React from 'react';

const Footer = ({count}) => <p style={{fontSize: 18}}> Осталось невыполненных задач: <span style={{color: 'red'}}> {count} </span> </p>;

    export default Footer;