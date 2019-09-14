// alert('Hello World!')
// console.log("Test")

import ReactDOM from 'react-dom'
import React from 'react'
import User from './User'
import Heading from './Heading'
import Article from './Article'


const app = document.getElementById('app')

// const name = 'Dimitar Pavlov'
// const element = <h1>Hi, I am {name}</h1>;


// CLASS //
const Container = () => {
    return (
        <React.Fragment>
         <Heading />
         <User />
         <Article />
        </React.Fragment>
    )
}

ReactDOM.render(<Container/>, app);


// PROBA START //
// (function sayHello() {
//     alert("hello DP!");
// })();

//  function sayHello() {
//     alert("hello DP!");
//  };
//   sayHello();

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }
//   alert(Rectangle);

// let Rectangle = class Rectangle2 {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   alert(Rectangle.name);
  // PROBA END //


