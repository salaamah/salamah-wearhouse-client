import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/items')
    .then(res=>res.json())
    .then(data=>setItems(data));
  },[]);
  return (
    <div className="App">
      <h1>Welcome to Salamah Grocery Wearhouse!</h1>
      <h1>Number of Items: {items.length}</h1>
    </div>
  );
}

export default App;
