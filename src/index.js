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
    return <h1>hello world</h1>
}


// 5 Show the component on the screen
root.render(<APP />)

