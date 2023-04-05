import './About.css'
import Button from 'react-bootstrap/Button'

function About(){
    return(
        <>
        <h1 className="About-heading">What is Animal World about ?</h1>
        <h2 className="About-subheading">A wide variety of animals</h2>
        <p className='About-section'>
            We have some of the most unique animals in the world at our
            Zoo.We treat our animals with upmost care. Sadly we have to, 
            put them up for sale due to the impact the pandemic
            had a couple months ago and would like any Zoo owners to purchase
            these animals.
            <br />
        <div className="mb-2">
        <Button variant="primary" size="lg">
          Find out more
        </Button>
        </div>
        </p>
        </>
    )
}

export default About