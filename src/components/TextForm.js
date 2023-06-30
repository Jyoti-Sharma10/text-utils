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

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
        <textarea className="form-control" value={text} id="myBox" rows="12" onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Covert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleDelete}>Delete text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove extra spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text === '' ? 0 : text.split(" ").filter(word => word !== '').length} words and {text.replace(/ /g, "").length} characters</p>
        <p>{text === '' ? 0 : text.split(" ").length * 0.08} minutes taken to read</p>
        <h2>Preview</h2> 
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
