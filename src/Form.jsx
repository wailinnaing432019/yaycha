import { useRef } from "react";

export default function Form({add}){
    const contentRef=useRef();
    const nameRef=useRef();
    return (
        <form
        onSubmit={e=>{
            
            e.preventDefault();
            const content=contentRef.current.value;
            const name=nameRef.current.value;
            add(content,name);
            e.currentTarget.reset();
        }
        }
        style={{
            display:"flex",
            flexDirection:"column",
            gap:3,
            borderRadius:8,
            padding:10,
            margin:5,
            background:"#def"
        }}

        >
            <input ref={contentRef} type="text" placeholder="Content" style={{padding:10}} />
            <input ref={nameRef} type="text" placeholder="Name" style={{padding:10}} />
            <button type="submit"  style={{ 
          padding: 8, 
          background: "#0d6efd", 
          color: "white",
          border: "0 none", 
        }}>Post</button>
        </form>
    )
}