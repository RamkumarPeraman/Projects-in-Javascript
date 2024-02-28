import React from 'react'
import LineItem from './LineItem';

const ItemsList = ({items ,handleCheck, handleDelete}) => {
  return (
    <ul>
    {items.map((item) =>(
        <LineItem
        item={item}
        key={item.id}
        // items ={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        
        />
    ))}
</ul>
  )
}

export default ItemsList