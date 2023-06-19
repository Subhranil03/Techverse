
import {Navbar , Nav , Container} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import {FaShoppingCart , FaUser} from 'react-icons/fa';
const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Techverse</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nm">
                   <Nav className="ms-auto">
                      <Nav.Link href="/cart"><FaShoppingCart/>Cart</Nav.Link> 
                      <Nav.Link href="/login"><FaUser />Sign in</Nav.Link> 
                    </Nav> 
                </Navbar.Collapse> 
            </Container>
        </Navbar>
    </header>
  )
}

export default Header