import React from 'react'
import ReactDOM from 'react-dom'

function Introduce(){
    return (
        <div>
            <h1>Fadli Ramadhan</h1>
            <p>My name is Fadli Ramadhan , i'm 25 Year's Old, My Last Education Formal is Vocational High School Media Informatika</p>
            <ul>
                <li>Beach</li>
                <li>Mountain</li>
                <li>Hill</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<Introduce />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
