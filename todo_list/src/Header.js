import React from 'react'

const Header = ({title}) => {
    
  return (
    <header>  
        <h1 className='head'>{title}</h1>
    </header>
  )
}

Header.defaultProps ={
  title:"To do list"
}
export default Header