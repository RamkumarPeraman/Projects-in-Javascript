import React from 'react';
import './index.css'
const Box = ({colorname,hexavalue,isDark}) => {
  return (
    <section
    className="box"
    style={{backgroundColor:colorname,color:isDark ? '#000' : '#fff'}}
    >
      <p>{colorname ?colorname :'Empty value'}</p>
      <p></p>
      <p>{hexavalue?hexavalue:''}</p>
    </section>
  );
};

Box.defaultProps = {
  colorname: "hello"
};

export default Box;
