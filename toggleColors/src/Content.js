import React, { useState } from 'react';
import Box from './Box';
import Input from './Input';

const Content = () => {
  const [colorname, setColor] = useState('');
  const [hexavalue, setHexavalue] = useState('');
  const [isDark, setIsDark] = useState('');

  return (
    <>
      <div className="main">
        <Box 
        colorname={colorname} 
        hexavalue ={hexavalue} 
        isDark = {isDark} 
        />
        <Input 
        colorname={colorname} 
        setColor={setColor} 
        setHexavalue={setHexavalue}
        isDark={isDark}
        setIsDark={setIsDark}
        />
      </div>
    </>
  );
}

export default Content;
