import { useState } from "react";
import Input from "./components/Input";
import Nav from "./components/Nav";
import Fex from './components/Fex.css'
import {FaSun} from 'react-icons/fa'


function App() {
  const[temp,settemp]=useState('your temp will be shown here')
  const[wend,setwend]=useState('your windspeed will be shown here')

  const shange=()=>{
        let demo=document.getElementById('floatingInput');
        let nestle=demo.value;
  
  let p=fetch(`https://goweather.herokuapp.com/weather/${nestle}`)
  p.then((val1)=>{
   return val1.json()
  }).then((val2)=>{
     let newtemp=val2.temperature;
     let windspeed=val2.wind;
 
     settemp(newtemp)
     setwend(windspeed)
 })

}
  return (
   <div className="mert">
   <Nav/>
   <div className="container">
    <h1>Live Weather Details <FaSun id="item"/> </h1>
   <Input shange={shange}/>
   <div className="newdiv">
   <h2 className="eww" id="demo">Temperature:- {temp}</h2>
   <h2 id="demo">windSpeed:- {wend}</h2>
   </div>
   </div>
   </div>
  );
}

export default App;
