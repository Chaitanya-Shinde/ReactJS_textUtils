import React,{useState} from 'react'

export default function TextForm(props) {//using props to dynamically change values
    const [text,setText] = useState(""); //state using hook of useState

    const handleUpperCaseText=()=>{ //sets text to uppercase
        //console.log("Set text to uppercase" + text);
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
        props.showAlert("Converted to upper case!","success");
    }
    const handleLowerCaseText=()=>{ //sets text to lowercase
        //console.log("Set text to uppercase" + text);
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText);
        props.showAlert("Converted to lower case!","success");
    }
    const handleClearText=()=>{ //clears all text
        //console.log("Set text to uppercase" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Cleared all text!","success");
    }
    const handleCopyText=()=>{ //Copies text to clipboard
        var text = document.getElementById("myTextBox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text to clipboard!","success");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(" ");
        setText(newText.join(" "))
        props.showAlert("Cleared all extra spaces!","success");
    }
    const handleOnChange=(event)=>{ //listens to any change in the text
        //console.log("text was changed");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="container" >
                <h1>{props.heading}</h1>
                <div className="TextArea mb-2">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#1a1a1a':'white', color: props.mode==='dark'?'white':'black',}} id="myTextBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseText}>Convert to UpperCase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseText}>Convert to LowerCase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear all text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear extra spaces</button>
            </div>
            <div className="container my-4">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <p>{text.length > 0 ? text:"Enter any text in the text box above to preview to here"}</p>
            </div>
        </div>
            
        </>
    )
}
