import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import PetsIcon from '@mui/icons-material/Pets';
import './Header.css'
import { NavLink } from 'react-router-dom';


function Header(){
    return(
        <Navbar className='Move' variant="dark">
             <PetsIcon></PetsIcon>
        <Container>
          <Navbar.Brand href="#home">Animal World</Navbar.Brand>
          <Nav className>
            <Nav.Link to='/' as={NavLink} className="nav-link">Home</Nav.Link>
            <Nav.Link to='/cart' as={NavLink} className="nav-link">Cart Page</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}


export default Header