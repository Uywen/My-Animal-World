import React from "react";
import Button from 'react-bootstrap/Button'
import background from './Koala.webp'
import './Hero.css'

function Hero(){
return(
    <>
     <div className="Cute" style={{ backgroundImage: `url(${background})` ,
     }}>
      <h1 className="Heading">Welcome to Animal World</h1>
    </div>
    <div className="d-grid gap-2">
    <Button variant="success" size='lg'>Sign Up</Button>
    </div>
    </>
    
)
}

export default Hero