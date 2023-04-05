import React, { useContext } from 'react'
import { AnimalContext } from "../context/animal-context"


export const AnimalCart = (props) => {
    const {id,name,price,animalImage} = props.data
    const { animalList, addToList,removeFromList,updateCartItemCount} = useContext(AnimalContext)
  return (
    <div className='animalCart'>
        <img alt='cute-animals' src={animalImage} />
        <div className='description'>
            <p><b>{name}</b></p>
            <p>${price}</p>
            <div className='quantity'>
                <button onClick={() => removeFromList(id)}>-</button>
                <input value={animalList[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToList(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
