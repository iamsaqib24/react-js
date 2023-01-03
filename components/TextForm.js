import React, {useState} from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const clickHandler = () => {
        // console.log("button clicked");
        let newText = text.toUpperCase()
        setText(newText)
    }

    const [text, setText] = useState("Enter text here...");


    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={clickHandler}>Click to Uppercase</button>
        </div>
    )
}
