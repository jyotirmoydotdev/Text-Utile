import React,{useState} from 'react';

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
    const [text, setText] = useState();
  return (
    <>
        <div className=" m-5 border-solid border-black">
          <textarea className="w-full h-max border-blue-200 p-4 border-2 rounded-md " value={text} onChange={handelOnchange}/>
            <div className="flex flex-row gap-2">
                <button className="bg-sky-500 hover:bg-sky-700 p-2  text-white rounded-md" onClick={onUpClick}>Uppercase</button>
                <button className="bg-sky-500 hover:bg-sky-700 p-2 text-white rounded-md" onClick={onDownClick}>Lowercase</button>
            </div>
        </div>
    </>
  );
}
