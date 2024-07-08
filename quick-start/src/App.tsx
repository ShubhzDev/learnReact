import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BtnComponent from "./components/Button"
import Profile from "./components/Card"
import ShoppingList from './components/ShoppingList';
import Gallery from './components/Gallery';
import TodoList from './components/TodoList';
import PackagingList from './components/PackagingList'

const isTrue : boolean = true

function App() {

  const [count,setCount] = useState(0)

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div className="App">
<PackagingList/>

    </div>
  );
}

export default App;
