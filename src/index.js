// alert('Hello World!')
// console.log("Test")
import React from 'react'
import ReactDOM from 'react-dom'
import User from './User'
import Heading from './Heading'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
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
const Menu = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About us</Link>
            </li>
            <li>
                <Link to='/contact'>Contact us</Link>
            </li>
            <li>
                <Link to='/login'>Log in</Link>
            </li>
            <li>
                <Link to='/user'>User</Link>
            </li>
        </ul>
    )
}

const Home = () => {
    return (
        <h1>Welcome to my home page!</h1>  // Poseben file //
    )
}

const About = () => {
    return (
        <h1>Welcome to my about page!</h1> // Poseben file //
    )
}

const Contact = () => {
    return (
        <h1>Welcome to my contact page!</h1> // Poseben file //
    )
}

const Login = () => {
    return (
        <h1>Welcome to my login page!</h1> // Poseben file //
    )
}

const Routes = () => {
    return (
    <Router>
    <Menu />
    <Switch>
       <Route  exact path='/' component={Home}/> 
       <Route  exact path='/about' component={About}/> 
       <Route  exact path='/contact' component={Contact}/> 
       <Route  exact path='/login' component={Login}/> 
       <Route  
       exact 
       path='/user' 
       render={(props) => 
        <React.Fragment>   
            <Heading />
            <User />
            <Article />
            <Form/>
        </React.Fragment>
       }
        /> 
    </Switch>
    </Router>
    )
}


// const Container = () => {
//     return (
//         <React.Fragment>
//         <Heading />
//         <User />
//         </React.Fragment>
//     )
// }

ReactDOM.render(<Routes/>, app)



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


