import React from 'react'
import './index.css'
import colorNames from 'colornames';
const Input = ( {colorname,setColor,setHexavalue,isDark,setIsDark}) => {
  return (
    <form action="" className='inpu' onSubmit={(e) => e.preventDefault()}>
        <input 
            autoFocus
            className='ipt'
            type="text"
            placeholder='Add Color Name'
            required
            value={colorname}
            onChange={(e) =>{
              setColor(e.target.value);
              setHexavalue(colorNames(e.target.value)); //
            }}
        />
        <button 
        onClick={()=>setIsDark(!isDark)}
        className='btn'>Toggle Text Color</button>
    </form>
  )
}

export default Input