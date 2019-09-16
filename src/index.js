// alert('Hello World!')
// console.log("Test")
import React from 'react'
import ReactDOM from 'react-dom'
import User from './User'
import Heading from './Heading'
import Article from './Article'
import Form from './Form'


const app = document.getElementById('app')

// const name = 'Dimitar Pavlov'
// const element = <h1>Hi, I am {name}</h1>;

// const bcg = document.getElementsByTagName('body');
// bcg.style.backgroundColor = 'yellow'
// document.body.addStyle('bcg');
document.body.style.backgroundColor = "pink";

const btn = document.createElement('button');  
btn.innerHTML = 'Click Me';                    
btn.style.color = 'black';  
btn.style.fontWeight='700'                     
btn.style.width = '210px';                     
btn.style.height = '30px';  
btn.style.display = 'flex'; 
btn.style.textAlign = 'center';  //?//
btn.style.margin = 'auto';

document.body.appendChild(btn); 

var element = document.getElementById("btnbcg");
element.style.backgroundColor = 'lightgreen'
element.style.width = '50%'
element.style.margin = 'auto';
element.appendChild(btn);
       
// const btnput = document.getElementById('btn')





// CLASS //
const Container = () => {
    return (
        <React.Fragment>
         <Heading />
         <User />
         <Article />
         <Form/>
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


