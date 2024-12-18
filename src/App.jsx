import Item from "./Item";
import List from "./List";



export default function App(){
  return (
    <div  style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Hello Yaycha!</h1>
      <List>
        <Item content="Hello , World!" name="Alice" />
        <Item content="React is fun" name="Bob" />
      </List>
    </div>
  )
}