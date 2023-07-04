import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleDelete = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text deleted!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces deleted!", "success");
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 className='my-2'>{props.heading}</h2>
        <div className="mb-3 my-3">
        <textarea className="form-control" value={text} id="myBox" rows="12" onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleLowClick}>Covert to lowercase</button>
        <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleDelete}>Delete text</button>
        <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleExtraSpace}>Remove extra spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text === '' ? 0 : text.split(" ").filter(word => word !== '').length} words and {text.replace(/ /g, "").length} characters</p>
        <p>{text === '' ? 0 : text.split(" ").filter(word => word !== '').length * 0.08} minutes taken to read</p>
        <h2>Preview</h2> 
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
