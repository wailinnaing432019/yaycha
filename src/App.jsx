import { useState } from "react";
import Item from "./Item";
import List from "./List";
import Form from "./Form";

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

  const add=(content,name)=>{
    const id=data[data.length-1].id+1;
    setData([...data,{id,content,name}])
  }

  const [showForm,setShowForm]=useState(false);
  return (
    <div  style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1
       style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      >Hello Yaycha!

      <button
    onClick={() => setShowForm(!showForm)}
    style={{
      width: 32,
      height: 32, 
      borderRadius: 50,
      border: "0 none",
      background: showForm ? "#dc3545" : "#0d6efd",
      color: "white",
      cursor:"pointer"
    }}>
    {showForm ? "×" : "+"}
  </button>
      </h1> 
      {showForm && <Form add={add} />}
      <List>
        {data.map(item=>{
          return <Item item={item} key={item.id} remove={remove} />
        })}
      </List>
    </div>
  )
}