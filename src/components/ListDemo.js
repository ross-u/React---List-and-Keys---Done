// src/components/ListDemo.js
import React from 'react';
import shortid from 'shortid';

const numbers = [1, 2, 3, 4, 5, 6, 7];

// array of list item HTML elements that needs to be displayed
/* 
const listItems = [
  <li>1</li>,
  <li>2</li>,
  <li>3</li>,
  <li>4</li>,
  <li>5</li>
];
*/

const listItems = numbers.map( (oneNumber, index) => {
    const keyId = shortid.generate();

    return <li key={keyId}>{oneNumber}</li> ;
//  return <li key={shortid.generate()}>{oneNumber}</li> ;
})

export default listItems; 