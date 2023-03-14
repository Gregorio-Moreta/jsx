// 1 import react and ReactDOM libraries
// Library that defines what a component is and how multiple components work together
import React from 'react'
// Library that knows how to get a component to show up in the brtwoser
import ReactDOM from 'react-dom'


// 2 Get a reference to th. div with ID root
const el = document.getElementById('root')


// 3 Tell React to take control of that element 
const root = ReactDOM.createRoot(el)


// 4 Create a component
function APP() {
    let message = 'Bye, there!'
    if (Math.random() > 0.5) {
        message = 'Hello there!'
    }
// Most common to use numbers and strings for values stored in variabls for JSX variables
// Objects create error messages and are not allowed as react chlldren
// React treats bookleans, nulls, and arrays in unexpected ways
//  Arrays don't have commas or [] prints each item independently
    const messageTwo = 123

    return (
        <div>
            <h1>{message}</h1>
            <h1>{messageTwo}</h1>
        </div>
    )
}


// 5 Show the component on the screen
root.render(<APP />)

