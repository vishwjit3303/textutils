import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");

    }
    const handleClearClick = ()=>{
        let newText ='';
        setText(newText)
        props.showAlert("Cleared!", "success");

    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");

    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const[text, setText] = useState("");
    // setText("new text");
  return (
    <>

    <div className="container" style={{color: props.mode ==='dark'?'white':'#020451'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'black':'white', color: props.mode ==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>LowerCase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




    </div>

    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>

</>
  )
}
