import React,{useState} from 'react';

function Textform() {
    const onUpClick=()=> {
        let newText=text.toUpperCase()
        setText(newText)
    }
    const onDownClick=()=>{
        let newText_=text.toLowerCase()
        setText(newText_)
    }
    const handelOnchange=(event)=>{
        setText(event.target.value)    
    }
    const EraseOnClick=()=>{
        setText("")
    }
    const [text, setText] = useState();
    return(
        <>
        <div className="container">
            <div className="my-3">
                <label form="mytext" className="form-label"></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handelOnchange} rows="8"></textarea>
            </div>
            
                <button className="btm  me-2 rounded text-white bg-info " onClick={onUpClick}>Convert to Uppercase</button>
                <button className="btm  mx-2 rounded text-white bg-info  " onClick={onDownClick}>Convert to Lowercase</button>
                <button className="btm  mx-2 rounded text-white bg-info " onClick={EraseOnClick}>Restart</button>

        </div>
        <div className="container my-3"> 
        {/*
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} mins to read</p>
    */}
        </div>
        </>
    );
}
export default Textform;