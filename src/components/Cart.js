import { useContext } from "react"
import { AllAnimals } from "../AnimalList"
import { AnimalContext } from "../context/animal-context"
import { AnimalCart } from './animalCart'
import { useNavigate } from "react-router-dom"
import './Cart.css'

function Cart(){

    const { animalList,getTotalAmount} = useContext(AnimalContext)

    const totalAmount = getTotalAmount()

    const navigate = useNavigate()
    return(
     <div className="cart">
        <div>
            <h1>My Cart</h1>
        </div>
        <div className="animal-cart">
            {AllAnimals.map((animals)=>{
                if(animalList[animals.id] !== 0){
                    return <AnimalCart data={animals} />
                }
            })}
        </div>
        {totalAmount > 0 ?
        <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate('/')}>Continue Adding to cart</button>
        </div>
: <h1>You cart is empty</h1>}
     </div>
    )
}

export default Cart