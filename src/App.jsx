import { useState } from "react";
import Item from "./Item";
import List from "./List";

export default function App(){


  const [data,setData]=useState([
    {id:1,name:"Alice Cho",content:"Beauty Blogger"},
    {id:2,name:"Do Pauk",content:"Entertainment"},
    {id:3,name:"Kelvin",content:"Funny Entertainment"}
  ]
  );

  const remove=id=>{
    setData(data.filter(item=>item.id!==id))
  };
  return (
    <div  style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Hello Yaycha!</h1>
      <List>
        {data.map(item=>{
          return <Item item={item} key={item.id} remove={remove} />
        })}
      </List>
    </div>
  )
}