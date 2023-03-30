import React from 'react'
import '../styles/App.css';
import {useSelector,useDispatch} from "react-redux";
import { incNumber,decNumber } from '../actions/index.js';
const App = () => {
const myState = useSelector((state)=>state.changeTheNumber);
const dispatch =useDispatch();

  return (
    <div id="main">
      <h1>Increment Decrement counter </h1>
      <h2>using React Redux</h2>
      <div>
      <button id='decrement' onClick={()=>dispatch(decNumber(5))}>Decrease</button>
      <input id='input' value={myState} />
      <button id='increment' onClick={()=>dispatch(incNumber(5))}>Increase</button>
      </div>
    </div>
  )
}


export default App;
