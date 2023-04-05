import React, { useContext } from 'react'
import {AnimalContext} from './context/animal-context'

export const Animal = (props) => {
    const {id,name,price,animalImage} = props.data
    const {addToList, animalList} = useContext(AnimalContext)

    const animalListAmount = animalList[id]
  return (
    <div className='animal'>
       <img alt="cute-animals" src={animalImage} />
       <div className='description'>
        <p>
            <b>{name}</b>
        </p>
        <p>
            ${price}
        </p>
       </div>
       <button className='addToCartBttn'
        onClick={() => addToList(id)}>
            Add to Cart{animalListAmount > 0 && <>({animalListAmount})</>}
            </button>
    </div>
  )
}
