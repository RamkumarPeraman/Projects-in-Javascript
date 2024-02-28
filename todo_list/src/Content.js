import React, { useState } from 'react'
import './index.css'
import './Content.css'
import ItemsList from './ItemsList';


const Content =({items , handleCheck, handleDelete}) => {

  return (

    <main>
        {(items.length) ?(
            <ItemsList 
            // items={items}
            items={items}
            // items ={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
        ) :(
            <p style={{marginTop:'2em'}}>List Empty</p>
        )}
    </main>
  )
}

export default Content