import { useState } from 'react'
import './App.css'

function App() {

  const [items, setItems] = useState([])
  const [input, setInput] = useState('')
  const [me, setMe] = useState('!');

  function addItem(){
    if(input === '') return;
    setItems([...items, input]);
    setInput('');
  }

  function removeItem(index){
    setItems(items.filter((item, i) => i !== index)); //makes a new array where elementsmeet condition
  }

  function clearItems(){
    setItems([]);
  }

  function sleep(ms){
    return new Promise( resolve => setTimeout(resolve, ms));
  }

  async function hey(){
    for(let i = 0; i < 230; i++){
      i == 228 ? i = 0 : await sleep(151);
      let code = Math.floor(Math.random() * 1098) + 2;
      setMe(String.fromCharCode(code));
    }
  }

  return (
    <>
      <h1>List</h1>
      <p>{items.length} items</p>

      <button onClick={clearItems}>Clear</button>
      <br />

      <input value={input} onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => { if(e.key === 'Enter') addItem() }} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item,i) => (
          <li key={i}> {item} <button onClick={() => removeItem(i)}>x</button></li>
        ))}
      </ul>

        <p onMouseEnter={() => hey()}>and just when you thought you got there{me}</p>

    </>
  )
}

export default App
