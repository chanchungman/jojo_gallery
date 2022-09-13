import React from 'react'
import Box from '../components/Box'
import { useEffect, useState, useContext, useRef } from 'react'

const Home = () => {
    const [value, setValue] = useState(""); 
    const inputEl = useRef(null);

    //  useEffect(() => {
    //      alert("Value Changed")
    //  },[value])

    let array = [13, 44,45]
    const big = array.filter((e) => {
        return e > 30
    })
    const [age,setAge] = useState(15)


    let display = null;
    function acc(value) { 
        if(value < 0){
            display = toString('('+Math.abs(value)+')');
        }
        else if(value >= 0){
            display = value;
        }
        else if(!value){
            display='underfind';
        }
            
    }

    async function callAPI(){
        let serach = await fetch("https://yogalight.idigitalts.com/api/class/get_all")
        let result = await serach.json
    }

 function newF(value) {
        if (!value || value == null) return;
        if ( value >=  0) return display = value;
        if (value < 0) return  display = `( ${Math.abs(value)} )`
    }

    const drink = age > 18? "Water" : "Milk"
  return (

    <div>
        <div
            onClick={ () =>inputEl.current.focus() }
        >
            Click Me
        </div>
        
        <input type={"text"} 
                ref={inputEl}
        />
        
        Value: {drink}
        <Box />
    </div>
    
 
  )
}

export default Home