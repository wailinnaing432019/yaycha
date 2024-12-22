import { useState } from "react";
import Item from "./Item";
import List from "./List";

export default function App(){


  const [data,setDate]=useState([
    {id:1,name:"Alice Cho",content:"Beauty Blogger"},
    {id:2,name:"Do Pauk",content:"Entertainment"},
    {id:3,name:"Kelvin",content:"Funny Entertainment"}
  ]
  );
  return (
    <div  style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Hello Yaycha!</h1>
      <List>
        {data.map(item=>{
          return <Item name={item.name} content={item.content} id={item.id} />
        })}
      </List>
    </div>
  )
}