import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleDelete = () => {
        let newText = "";
        setText(newText);
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
        <textarea className="form-control" value={text} id="myBox" rows="12" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Covert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleDelete}>Delete text</button>
    </div>
    <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text === '' ? 0 : text.split(" ").filter(word => word !== '').length} words and {text.replace(/ /g, "").length} characters</p>
        <p>{text === '' ? 0 : text.split(" ").length * 0.08} minutes taken to read</p>
        <h2>Preview</h2> 
        <p>{text}</p>
    </div>
    </>
  )
}
