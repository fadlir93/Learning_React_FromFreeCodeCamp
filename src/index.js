import React from 'react'
import ReactDOM from 'react-dom'
import MyApp from './components/MyApp'

// function App() {
//     let firstName = "Fadli"
//     let lastName = "Ramadhan"
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay

//     const page3 = {
//         fontSize: '30',
//         backgroundColor: 'grey',
//     }

//     if(hours < 12) {
//         timeOfDay = "Morning"
//         page3.color = 'red'
//     } else if(hours > 12 && hours < 17) {
//         timeOfDay = "Evening"
//         page3.color = 'pink'
//     } else {
//         timeOfDay = "Night"
//         page3.color = 'green'
//     }
    
//     return (
//         <div>
//             <h1 style={{color: 'yellow', backgroundColor:'brown'}}>My Name is {`${firstName} ${lastName}`}</h1>
//             <h3>It's Currently {date.getHours() % 12} O'clock</h3>
//             <h2 style={page3}>Good {timeOfDay}</h2>
//         </div>
        
//     )
// }

ReactDOM.render(<MyApp />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
