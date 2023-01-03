import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'


function App() {
    return (
        <>
            <Navbar title="Hello Navbar using Props" name="Saqib" />
            {/* <Navbar /> */}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
