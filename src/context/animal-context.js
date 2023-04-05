import React, { createContext, useState } from 'react'
import { AllAnimals } from '../AnimalList'

export const AnimalContext = createContext(null)

const getDefaultList = () => {
    let list = {}
    for(let i = 1; i  < AllAnimals.length +1; i++){
        list[i] = 0
    }
    return list
}

export const AnimalContextProvider = (props) => {

    const [animalList,setanimalList] = useState(getDefaultList())

    const getTotalAmount = () => {
        let totalAmount = 0
        for(const item in animalList){
            if(animalList[item] > 0){
                let itemInfo = AllAnimals.find((animals) => animals.id === Number(item))
                totalAmount +=animalList[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const addToList = (animalId) => {
        setanimalList((prev) => ({...prev, [animalId] : prev[animalId] + 1}))
    }

    const removeFromList = (animalId) => {
        setanimalList((prev) => ({...prev, [animalId] : prev[animalId] - 1}))
    }

    const updateCartItemCount = (newAmount,animalId) => {
        setanimalList((prev) => ({...prev,[animalId]: newAmount}))
    }

    const contextValue = {animalList,addToList,removeFromList,updateCartItemCount,getTotalAmount}

  
  return (
    <AnimalContext.Provider value={contextValue}>{props.children}</AnimalContext.Provider>
  )
}
