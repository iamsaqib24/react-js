import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


function App() {
    return (
        <>
            <Navbar title="Hello Navbar using Props" name="Saqib" />
            {/* <Navbar /> */}
            <div className="container">
                <TextForm heading="Enter the text" />
            </div>

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
