import React,{useState} from 'react';
import copy from "copy-to-clipboard";

export default function Textarea() {
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
    const copyToClipboard = () => {
       copy(text);
    }
    const [text, setText] = useState("");
    let word= text.split(" ").length
    const cha=text.length

  return (
    <div className='container mx-auto'>
        <div className="p-3">
            <textarea className="w-full border-blue-200 p-4 border-2 rounded-md" placeholder='Enter your text here' value={text} onChange={handelOnchange}/>
        </div>
        <div className="flex flex-row gap-2 flex-wrap p-3">
            <button className="bg-sky-500 hover:bg-sky-700 p-2 text-white rounded-md" onClick={onUpClick}>Uppercase</button>
            <button className="bg-sky-500 hover:bg-sky-700 p-2 text-white rounded-md" onClick={onDownClick}>Lowercase</button>
            <button className="bg-sky-500 hover:bg-sky-700 p-2 text-white rounded-md" onClick={EraseOnClick}>Restart</button>
            <button className="bg-sky-500 hover:bg-sky-700 p-2 text-white rounded-md" onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="container p-4 text-2xl">
            {word} words and {cha} characters
        </div>
    </div>
  );
}