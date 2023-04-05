import {AllAnimals} from '../AnimalList'
import { Animal } from '../Animal'
import './Animals.css'


function Animals(){


    return(
<div className='animal-Page'>
        <div className='animal-Title'>
        <h1>Animals</h1>
        </div>
        <div className='animals'>
            {AllAnimals.map((animal) => (
                <Animal data={animal}/>
            ))}
        </div>
        </div>
    )
}

export default Animals