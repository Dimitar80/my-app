import React from 'react'
import ReactDOM from 'react-dom'
import Login from './log-in'
// import Heading from './Heading'

// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Login from './Login'

// import { BrowserRouter as Router, Route, Link, Switch } from './node_modules/react-router-dom'

console.log('Hellooooooo');

const app = document.getElementById('log')

document.body.style.backgroundColor = "lightblue";



const Logcon = () => {
    return (
        <Login/>
    )
}

ReactDOM.render(<Logcon/>, app)


// CLASS //
// const Menu = () => {
//     return (
//         <ul>
//             <li>
//                 <Link to='/home'>Home</Link>
//             </li>
//             <li>
//                 <Link to='/about'>About us</Link>
//             </li>
//             <li>
//                 <Link to='/contact'>Contact us</Link>
//             </li>
//             <li>
//                 <Link to='/login'>Log in</Link>
//             </li>
//             <li>
//                 <Link to='/user'>User</Link>
//             </li>
//         </ul>
//     )
// }

// const Home = () => {
//     return (
//         <h1>Welcome to my home page!</h1>  // Poseben file //
//     )
// }

// const About = () => {
//     return (
//         <h1>Welcome to my about page!</h1> // Poseben file //
//     )
// }

// const Contact = () => {
//     return (
//         <h1>Welcome to my contact page!</h1> // Poseben file //
//     )
// }

// const Login = () => {
//     return (
//         <h1>Welcome to my login page!</h1> // Poseben file //
//     )
// }

// const Routes = () => {
//     return (
//     <Router>
//     <Menu />
//     <Switch>
//        <Route  exact path='/home' component={Home}/> 
//        <Route  exact path='/about' component={About}/> 
//        <Route  exact path='/contact' component={Contact}/> 
//        <Route  exact path='/login' component={Login}/> 
//        <Route  
//        exact 
//        path='/user' 
//        render={(props) => 
//         <React.Fragment>   
//             <Heading />
//             <User />
//         </React.Fragment>
//        }
//         /> 
//     </Switch>
//     </Router>
//     )
// }


// const Container = () => {
//     return (
//         <React.Fragment>
//         <Heading />
//         <User />
//         </React.Fragment>
//     )
// }

// ReactDOM.render(<Routes/>, app)






